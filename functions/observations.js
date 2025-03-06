async function observation(categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado) {

    const categoriaSemNumero = categoria.replace(/^\d+\.\s*/, '');

    return `
        O cliente está na categoria ${categoriaSemNumero}, com um resultado de ${resultado}% do seu potencial total.
        🎯  Aplicações: Ideal ${aplicacoesIdeal} vs. ${aplicacoesMensal} atuais.
        🏷️ Bisnagas: Ideal ${bisnagasIdeal} vs. ${bisnagasMensal} atuais.
    `.trim();
}

export default observation