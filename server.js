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

const app = express();

dotenv.config({ path: path.resolve("./.env") }); 

app.use(express.json());
app.use(helmet()); 

const PORT = process.env.PORT || 4040;

const ALLOWED_IP = process.env.ALLOWED_IPS 

app.use((req, res, next) => {

  // Captura o IP real do cabeçalho "x-forwarded-for"
  const clientIP = req.headers["x-forwarded-for"] ? req.headers["x-forwarded-for"].split(",")[0].trim() : req.ip;
  
  console.log("🌍 IP recebido:", clientIP);

  if (clientIP !== ALLOWED_IP) {
    console.log("🚫 ACESSO NEGADO: IP não autorizado!");
    return res.status(403).json({ error: "Acesso negado. IP não autorizado." });
  }

  next();
});


// 🔹 Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor rodando com Express!");
});

// 🔹 Captura de requisição do CRM
app.post("/clint", async (req, res) => { // Adicionei "async" aqui
  console.log("📩 Requisição recebida da Clint!");
  
  const dados = req.body; // Extrair corpo da requisição
  console.log(dados)

  const deal_id = dados.deal_id;
  const cicloCompra = dados.contact_ciclo_de_compra || 90; // Se vier vazio, define como 90
  //const ticketMedio = dados.contact_ticket_medio || 0;
  const valorCompra = dados.deal_value || 200;
  const qtdCadeiras = Number(dados.organization_quantas_cadeiras_tem); // Converte para número
 
  // Chama a função categorize
  const { categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado } = await categorize(qtdCadeiras, valorCompra, cicloCompra);

  const obsString = await observation(categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado)

  try {

    const message = await postCategory(deal_id, categoria);

    const {clintId, nome} = await getClient(deal_id)

    const {obs, cicloCompra, dataVendas, qtdCompra, ticketMedio} = await getFields(clintId)

    await postFields(clintId, obsString, obs, cicloCompra, dataVendas, qtdCompra, valorCompra, ticketMedio)
    
    return res.status(200).json({ success: true, message}); // Retornar sucesso corretamente
  } catch (error) {
    console.error("Erro ao processar a requisição:", error); // Mantém log interno
    return res.status(500).json({ 
      success: false, 
      message: "Ocorreu um erro no processamento." // Mensagem genérica para o cliente
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