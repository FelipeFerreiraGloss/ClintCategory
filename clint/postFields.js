import clintApi from '@api/clint-api';
import dotenv from 'dotenv';
import cicloDeCompra from '../functions/ciclo.js';

dotenv.config(); 

//dotenv.config({ path: "./.env" }); 

clintApi.server('https://api.clint.digital/v1');

async function postFields(clintId, fieldObs, obs, cicloCompra, dataVendas, qtdCompra, valorCompra, ticketMedio) {
  try {

    if (!process.env.CLINT_TOKEN) {
      throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
    }
    
    const updatedObservations = `📌 ${new Date().toLocaleString()}: ${fieldObs}\n${obs || ""}`;
    const updatedDataVendas = `${new Date().toLocaleDateString("pt-BR")} | ${dataVendas || ""}`;
    const updatedQtdCompras = (parseInt(qtdCompra, 10) || 0) + 1;
    const updatedTicketMedio = ((ticketMedio * qtdCompra) + valorCompra) / updatedQtdCompras;

    console.log(updatedDataVendas);

    const novoCicloCompra = cicloDeCompra(updatedDataVendas, cicloCompra, qtdCompra);

    console.log(novoCicloCompra);

    const response = await clintApi.postContactsId({
      fields: {
        observacoes: updatedObservations,
        data_das_vendas: updatedDataVendas,
        quantidade_de_compra: updatedQtdCompras,
        ciclo_de_compra: novoCicloCompra,
        id_clint: clintId,
        ticket_medio: updatedTicketMedio
      }
    }, {
      id: clintId,
      'api-token':process.env.CLINT_TOKEN
    });

    if (response.status === 200) {
      const message = `✅ Cliente ${clintId} atualizado com sucesso!`;
      console.log(message);
      return { success: true, message };
    }

    throw new Error("Resposta inesperada da API."); // Garante que sempre haja um retorno explícito

  } catch (error) {
    console.error(`❌ Erro ao atualizar o cliente ${clintId}:`, error);
    
    return {
      success: false,
      message: "Erro ao atualizar os dados do cliente. Tente novamente mais tarde."
    };
  }
}

export default postFields;
