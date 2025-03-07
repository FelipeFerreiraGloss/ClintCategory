import calcularBisnagas from "./bisnagas.js"


async function categorize(qtdCadeiras, valorCompra, cicloCompra, ticketMedio) {

    let diasTrabalhados = 20
    let mes = 30
    let rendimentoBisnaga = 4

    // Verificar se qtdCadeiras é um número válido, se não, atribuir 2
    qtdCadeiras = isNaN(qtdCadeiras) || qtdCadeiras === 0 ? 2 : qtdCadeiras;

    //Valor compra não existindo utiliza-se ticket medio e nao usado 
    valorCompra = (!valorCompra || isNaN(valorCompra)) ? (ticketMedio && !isNaN(ticketMedio) ? ticketMedio : 479) : valorCompra; // alterar caso de erro

    console.log(`${qtdCadeiras} cadeiras, ${valorCompra} valor, ${cicloCompra} ciclo de compra`)

    let bisnagas = calcularBisnagas(valorCompra) // 4

    const consumoMensal = (cicloCompra / mes) // 30

    const aplicacoesIdeal = (qtdCadeiras * diasTrabalhados) // 20

    const bisnagasIdeal = (aplicacoesIdeal / rendimentoBisnaga) // 5

    const bisnagasMensal = (bisnagas / consumoMensal)  // 4

    const aplicacoesMensal = bisnagasMensal * rendimentoBisnaga // 16

    const resultado = (bisnagasMensal / bisnagasIdeal ) * 100

    
    console.log(`${consumoMensal} consumoMensal, ${bisnagas} bisnagas, ${aplicacoesIdeal} aplicacoesIdeal, 
        ${bisnagasIdeal}, ${bisnagasMensal} bisnagasMensal, ${aplicacoesMensal}, aplicacoesMensal, ${resultado}resultado `)

    let categoria 
    if (resultado > 125) {
        categoria = "8. Clientes A+";
    } else if (resultado >= 100 && resultado <= 125) {
        categoria = "7. Clientes A";
    } else if (resultado >= 75 && resultado < 100) {
        categoria = "6. Clientes B";
    } else if(resultado >=50 && resultado < 75) {
        categoria = "5. Clientes C"; 
    } else if (resultado >=25 && resultado <50){
        categoria = "4. Clientes D"
    } else if (resultado < 25 ){
        categoria = "3. Clientes Inativos"
    }

    
    const aplicacoesIdealFormatado = Number(aplicacoesIdeal.toFixed(2));
    const bisnagasIdealFormatado = Number(bisnagasIdeal.toFixed(2));
    const bisnagasMensalFormatado = Number(bisnagasMensal.toFixed(2));
    const aplicacoesMensalFormatado = Number(aplicacoesMensal.toFixed(2));
    const resultadoFormatado = Number(resultado.toFixed(2));


    return {
        categoria,
        aplicacoesIdeal: aplicacoesIdealFormatado,
        bisnagasIdeal: bisnagasIdealFormatado,
        bisnagasMensal: bisnagasMensalFormatado,
        aplicacoesMensal: aplicacoesMensalFormatado,
        resultado: resultadoFormatado
    };


    
}


export default categorize