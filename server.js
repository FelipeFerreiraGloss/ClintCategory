import express from "express";
import dotenv from "dotenv";
import path from "path";
import helmet from "helmet";
import categorize from "./functions/categorize.js";
import postCategory from "./clint/postCategory.js";
import getClient from "./clint/getClientId.js";
import observation from "./functions/observations.js";
import postFields from "./clint/postFields.js";
import getFields from "./clint/getClientFields.js";
import postFieldsObs from "./clint/postFieldsObs.js";
import rateLimit from "express-rate-limit";
import postTagClient from "./clint/postTag.js";


const app = express();
app.set('trust proxy', 1); // Confia no primeiro proxy (Railway)

dotenv.config();
//dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(helmet());

const PORT = process.env.PORT || 4040;

const ALLOWED_IP = process.env.ALLOWED_IPS

/*const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 10, 
  message: "Muitas requisições feitas, tente novamente em 1 hora.",
  standardHeaders: true, 
  legacyHeaders: false, 
});
*/


app.use((req, res, next) => {

  // Captura o IP real do cabeçalho "x-forwarded-for"
  const clientIP = req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"].split(",")[0].trim() : req.ip;

  console.log("🌍 IP recebido:", clientIP);

  if (clientIP !== ALLOWED_IP) {
    return res.status(403).json({ success: false, message: "IP não autorizado" });  // Se o IP não for autorizado, retorna erro 403
  }


  next();
});

// 🔹 Captura de requisição do CRM
app.post("/vendas", async (req, res) => {
  console.log("📩 Requisição recebida da Clint!");

  const dados = req.body;
  console.log(dados)

  const deal_id = dados.deal_id;
  const cicloCompra = dados.contact_ciclo_de_compra || 90; // Padrao definido 90
  const valorCompra = Number(dados.deal_value) || 0; // alterar caso de erro
  const qtdCadeiras = Number(dados.organization_quantas_cadeiras_tem);
  const ticketMedio = dados.contact_ticket_medio || 0;

  // Chama a função categorize
  const { categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado } = await categorize(qtdCadeiras, valorCompra, cicloCompra, ticketMedio);

  const obsString = await observation(categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado)

  try {

    const message = await postCategory(deal_id, categoria);

    const { clintId, nome } = await getClient(deal_id)

    const { obs, cicloCompra, dataVendas, qtdCompra, ticketMedio } = await getFields(clintId)

    await postFields(clintId, obsString, obs, cicloCompra, dataVendas, qtdCompra, valorCompra, ticketMedio)

    await postTagClient(clintId, categoria)

    return res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return res.status(500).json({
      success: false,
      message: "Ocorreu um erro no processamento."
    });
  }
});


app.post("/category", async (req, res) => {
  console.log("📩 Requisição recebida da Clint!");

  const dados = req.body;
  console.log(dados)

  const deal_id = dados.deal_id;
  const cicloCompra = dados.contact_ciclo_de_compra || 90; // Padrao definido 90
  const valorCompra = dados.deal_value;
  const qtdCadeiras = Number(dados.organization_quantas_cadeiras_tem);
  const ticketMedio = dados.contact_ticket_medio || 0;

  const { categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado } = await categorize(qtdCadeiras, valorCompra, cicloCompra, ticketMedio);

  const obsString = await observation(categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado)



  try {

    const message = await postCategory(deal_id, categoria);

    const { clintId, nome } = await getClient(deal_id)

    const { obs } = await getFields(clintId)

    await postFieldsObs(clintId, obsString, obs)

    await postTagClient(clintId, categoria)

    return res.status(200).json({ success: true, message });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return res.status(500).json({
      success: false,
      message: "Ocorreu um erro no processamento."
    });
  }
});




// 🔹 Inicia o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});


//const idClint = dados.contact_id_clint;
//const dataDasVendas = dados.contact_data_das_vendas;
//const qtdCompras = dados.quantidade_de_compra;
// const obs = dados.contact_observacoes;