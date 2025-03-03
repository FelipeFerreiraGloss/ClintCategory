function cicloDeCompra(updatedDataVendas) {

    const datas = updatedDataVendas.split(" | ") // splita onde houver | 
        .map(dataStr => {
            const [dia, mes, ano] = dataStr.split("/").map(Number); // Converter "dd/mm/yyyy" para números
            return new Date(ano, mes - 1, dia); // Criar objeto Date (mês começa em 0)
        })
        .filter(data => !isNaN(data)); 

    // caso aja so duas compras retorna 0
    if (datas.length < 2) return 0;

    // Ordenar as datas do mais antigo para o mais recente
    datas.sort((a, b) => a - b);

    // Calcular intervalos entre compras
    let somaIntervalos = 0;
    for (let i = 1; i < datas.length; i++) {
        const diffEmMs = datas[i] - datas[i - 1]; // Diferença em milissegundos
        const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24); // Converter para dias
        somaIntervalos += diffEmDias;
    }

    // Calcular média dos intervalos
    const mediaIntervalo = somaIntervalos / (datas.length - 1);

    return Math.round(mediaIntervalo); // Retornar número inteiro de dias
}

export default cicloDeCompra