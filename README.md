# ClintCategory
=======
# 📌 Guia de Uso e Manutenção

## 📌 Alterações em Campos do Contato
Para futuras modificações relacionadas aos campos do contato, utilize a função **getClientField**. Essa função permite extrair e manipular campos que poderão ser utilizados posteriormente.

## 🔍 Obtendo o ID Clint de Forma Segura
Para obter o **ID Clint** de maneira segura, sem erros causados por alterações manuais feitas pelos vendedores, utilize a função **getClientID**. Ela obtém o ID diretamente do negócio.

## 🔄 Atualização da Etapa do Funil
Para alterar a etapa do funil de um cliente, utilize a função **postCategory**. Essa é a principal função do código para atualizar negócios, permitindo qualquer modificação necessária.

## ✏️ Alteração de Campos do Cliente
Para modificar os campos de um **Cliente ID**, utilize a função **postFields**. Essa função é genérica até certo ponto, mas possui uma variante chamada **postFieldsObs**, que altera exclusivamente o campo de observações.

Se no futuro for necessário atualizar campos específicos de um **lead**, recomenda-se utilizar o modelo da **postFieldsObs** ou outras funções já existentes para essa finalidade.

## 🏷️ Adição de Tags ao Cliente
A função **postTag** é responsável por adicionar tags ao usuário. Para isso, basta inserir os nomes das tags dentro de **[ ]**, sem limites de quantidade, apenas informando os nomes desejados.

---

# 📂 Estrutura de Arquivos

### 📁 Pasta `functions` (Responsável pela lógica de negócios)

- **Bisnagas.js** → Calcula quantas bisnagas são compradas a partir do valor de compra.
- **Ciclo.js** → Calcula o ciclo de compra de duas formas:
  - Processa a string do campo de data das vendas, extrai as datas e realiza o cálculo.
  - Compara a quantidade de compras e a quantidade de datas, pois pode haver discrepâncias. Em casos de dados incompletos, calcula a média entre o ciclo de compra atual e o anterior para obter um novo ciclo estimado.
- **Categorize.js** → Categoriza clientes em diferentes faixas, seguindo padrões e medidas definidos internamente.
- **Observation.js** → Principal função para escrever as observações do cliente. Baseia-se nos dados gerados pelos cálculos do código e pode ser adaptada para criar novas informações úteis em novos campos.

---

# 🌐 Endpoints do Servidor

### 1️⃣ `vendas`
Atualiza informações do negócio e do cliente no momento da venda, modificando:
- Ciclo de compra
- Observações
- Quantidade de compras

### 2️⃣ `category`
Responsável apenas por categorizar o cliente sem modificar as informações usadas como base de cálculo.

---

# ⚠️ Observações Importantes

- O campo **Quantidade de Cadeiras** deve conter **apenas números**. Se preenchido incorretamente, o sistema assume automaticamente o valor **2**.
- Os seguintes campos **NÃO DEVEM SER ALTERADOS**:
  - **Datas**
  - **Quantidade de compras**
  - **Ciclo de compra**
  - Qualquer alteração pode impactar nos cálculos!
- O campo **idClint** não deve ser modificado manualmente. Caso esteja vazio, preenchê-lo com o final da URL após a barra:
  ```
  https://app.clint.digital/deal/
  ```
- Os campos **Hunter** e **Farmer**, se estiverem vazios ou incorretos, devem ser preenchidos com o **nome da tag do Hunter**.
- O campo **Observações** pode ser editado para remover informações repetidas. Algumas duplicações ocorrem porque leads podem ter sido categorizados mais de uma vez.

---

# 📅 Histórico de Alterações

Adicione aqui futuras alterações e versionamentos.

📆 **06/03/2025** - Primeira versão documentada.

>>>>>>> master
