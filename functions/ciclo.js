function cicloDeCompra(updatedDataVendas, cicloCompra, qtdCompra) {
    console.log(cicloCompra);

    const datas = updatedDataVendas.split(" | ") // Splita onde houver |
        .map(dataStr => {
            const [dia, mes, ano] = dataStr.split("/").map(Number); // Converter "dd/mm/yyyy" para números
            return new Date(ano, mes - 1, dia); // Criar objeto Date (mês começa em 0)
        })
        .filter(data => !isNaN(data)); // Filtrar datas válidas

    // Caso haja apenas uma data ou menos, não podemos calcular o ciclo
    if (datas.length < 2) return 0;

    // Ordenar as datas do mais antigo para o mais recente
    datas.sort((a, b) => a - b);

    let somaIntervalos = 0;

        for (let i = 1; i < datas.length; i++) {
            const diffEmMs = datas[i] - datas[i - 1]; // Diferença em milissegundos
            const diffEmDias = diffEmMs / (1000 * 60 * 60 * 24); // Converter para dias
            somaIntervalos += diffEmDias;
        }

        // Calcular média dos intervalos
    let mediaIntervalo = somaIntervalos / (datas.length - 1);

    if(Number(qtdCompra) !== (datas.length - 1)) {
        console.log(qtdCompra)
        console.log(datas.length - 1)
        // Caso a quantidade de compras seja diferente do número de datas
        console.log("A quantidade de compras é diferente do número de datas");

        // Ajustando a média com base no ciclo anterior
        mediaIntervalo = (mediaIntervalo + Number(cicloCompra)) / 2; // Média dos dois ciclos
    }

    return Math.round(mediaIntervalo); // Retornar número inteiro de dias
}

export default cicloDeCompra;


 
