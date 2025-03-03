async function observation(categoria, aplicacoesIdeal, bisnagasIdeal, bisnagasMensal, aplicacoesMensal, resultado) {
    return `
        O cliente está na categoria ${categoria}, com um resultado de ${resultado}% do seu potencial total.
        🎯  Aplicações: Ideal ${aplicacoesIdeal} vs. ${aplicacoesMensal} atuais.
        🏷️ Bisnagas: Ideal ${bisnagasIdeal} vs. ${bisnagasMensal} atuais.
    `.trim();
}

export default observation