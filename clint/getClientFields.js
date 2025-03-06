import clintApi from '@api/clint-api';
import dotenv from 'dotenv';

dotenv.config(); 
//dotenv.config({ path: "./.env" }); 

clintApi.server('https://api.clint.digital/v1');

async function getFields(clintId) {
    try {
    
        if (!process.env.CLINT_TOKEN) {
            throw new Error("❌ CLINT_TOKEN não está definido nas variáveis de ambiente!");
        }

        const response = await clintApi.getContactsId({
            id: clintId,
            'api-token':process.env.CLINT_TOKEN
        });

        const data = response.data;

        console.log("📩 Dados recebidos da API:", data);

        if (!data?.data) {
            throw new Error("❌ Resposta da API não contém os dados esperados.");
        }

        return {
            obs: data.data.fields.observacoes || "",
            idClint: data.data.fields.id_clint || "",
            cicloCompra: data.data.fields.ciclo_de_compra || "",
            dataVendas: data.data.fields.data_das_vendas || "",
            qtdCompra: data.data.fields.quantidade_de_compra || "",
            ticketMedio: data.data.fields.ticket_medio || "",
            
        };

    } catch (error) {
        console.error("❌ Erro ao buscar o deal:", error.message);
        return null; 
    }
}

export default getFields;
