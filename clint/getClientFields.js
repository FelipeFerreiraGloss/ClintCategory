import clintApi from '@api/clint-api';
import dotenv from 'dotenv';

dotenv.config(); // Railway já carrega as variáveis automaticamente

// ✅ Inicializa a API uma única vez
clintApi.server('https://api.clint.digital/v1');

async function getClient(deal_id) {
    try {
        // ✅ Validação para evitar erro se a variável de ambiente não estiver definida
        if (!process.env.CLINT_TOKEN) {
            throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
        }

        const response = await clintApi.getDealsId({
            id: deal_id,
            'api-token': process.env.CLINT_TOKEN
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
        return null; // Retorna null em caso de erro
    }
}

export default getClient;
