import clintApi from '@api/clint-api';
import dotenv from 'dotenv';

dotenv.config(); 
//dotenv.config({ path: "./.env" }); 


async function postTagClient(contact_id, categoria){

const categoriaSemNumero = categoria.replace(/^\d+\.\s*/, '');

    try {
        clintApi.server('https://api.clint.digital/v1');


        const response = await clintApi.postContactsIdTags([categoriaSemNumero],{
            id: contact_id,
            'api-token': process.env.CLINT_TOKEN
          })

          const data = response.data
          
          return { message: "Tag adicionada com sucesso", data };

    } catch (error) {
        console.error("Erro ao adicionar a tag ao cliente:", error);
        return { message: "Erro ao adicionar a tag", error };
    }
}

export default postTagClient
