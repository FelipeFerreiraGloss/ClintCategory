import clintApi from '@api/clint-api';
import dotenv from 'dotenv';

dotenv.config();

// ✅ Inicializa a API uma única vez
clintApi.server('https://api.clint.digital/v1');

async function getClient(deal_id) {
    try {
       
        if (!process.env.CLINT_TOKEN) {
            throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
        }

        const response = await clintApi.getDealsId({
            id: deal_id,
            'api-token':process.env.CLINT_TOKEN 
        });

        const data = response.data;

        console.log("📩 Dados recebidos da API:", data);

        if (!data?.data) {
            throw new Error("❌ Resposta da API não contém os dados esperados.");
        }

        return {
            clintId: data.data.contact?.id || "Sem Cliente ID",
            nome: data.data.contact?.name || "Sem Nome",
        };

    } catch (error) {
        console.error("❌ Erro ao buscar o deal:", error.message);
        return null; 
    }
}

export default getClient;
