import clintApi from '@api/clint-api';
import dotenv from 'dotenv';

dotenv.config(); 


clintApi.server('https://api.clint.digital/v1');

async function postCategory(deal_id, categoria) {
  try {
   
    if (!process.env.CLINT_TOKEN) {
      throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
    }

    console.log(`📩 Atualizando negócio ${deal_id} para categoria: ${categoria}`);

    const response = await clintApi.postDealsId(
      { stage: categoria, status: 'OPEN' },
      { id: deal_id, 'api-token':process.env.CLINT_TOKEN}
    );

    if (response.status === 200) {
      const message = `✅ Negócio ${deal_id} atualizado com sucesso!`;
      console.log(message);
      return { success: true, message };
    } else {
      throw new Error(`❌ Erro na API: Status ${response.status}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao categorizar o negócio ${deal_id}:`, error); // Loga o erro completo para debug
    return { 
        success: false, 
        message: `Erro ao processar a solicitação. Tente novamente mais tarde.` 
    };
  }
}

export default postCategory;
