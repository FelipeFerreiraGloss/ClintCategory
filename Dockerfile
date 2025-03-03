# Usa a imagem oficial do Node.js como base
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para dentro do container
COPY . .

# Expõe a porta 3000 (ou a que seu servidor usa)
EXPOSE 4040

# Comando para rodar a aplicação
CMD ["npm", "start"]
