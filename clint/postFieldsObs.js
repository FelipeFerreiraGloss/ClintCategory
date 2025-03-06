import clintApi from '@api/clint-api';
import dotenv from 'dotenv';
import cicloDeCompra from '../functions/ciclo.js';


//dotenv.config({ path: "./.env" }); 
dotenv.config(); 

clintApi.server('https://api.clint.digital/v1');

async function postFieldsObs(clintId, fieldObs, obs) {
  try {

    if (!process.env.CLINT_TOKEN) {
        throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
      }

    const updatedObservations = `📌 ${new Date().toLocaleString()}: ${fieldObs}\n${obs || ""}`;

    const response = await clintApi.postContactsId({
      fields: {
        observacoes: updatedObservations}
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

export default postFieldsObs;
