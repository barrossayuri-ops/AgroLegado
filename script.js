// 1. Dados de Bio-Receitas e Manejo Sustentável [Conversa]
const bioReceitas = [
    {
        alvo: "Pragas Subterrâneas (Larvas/Nematoides)",
        solucao: "Solo Vivo e Consórcio Braquiária",
        instrucao: "Utilize o Plantio Direto sobre palhada. O aumento da matéria orgânica dobra os microrganismos inimigos dos nematoides.",
        beneficio: "Proteção radicular e maior infiltração de água."
    },
    {
        alvo: "Ácaros e Insetos Sugadores",
        solucao: "Rotação Estruturada (Soja/Milho)",
        instrucao: "Quebre o ciclo de vida das pragas alternando culturas sazonais e mantendo abrigos naturais para predadores.",
        beneficio: "Redução de até 30% no custo com inseticidas químicos."
    },
    {
        alvo: "Moluscos e Doenças fúngicas",
        solucao: "Manejo Hídrico com Sensores",
        instrucao: "Evite o excesso de umidade que atrai lesmas e mofo branco. Aplique a lâmina d'água exata via sensores de tensão.",
        beneficio: "Economia de água e controle fitossanitário natural."
    },
    {
        alvo: "Deficiência de Nitrogênio",
        solucao: "Fixação Biológica (FBN)",
        instrucao: "Inocule sementes com Bradyrhizobium (soja) ou Azospirillum (milho/gramíneas).",
        beneficio: "Substitui completamente adubos químicos nitrogenados industriais."
    }
];

// 2. Renderização Automática das Receitas
function carregarReceitas() {
    const grid = document.getElementById('grid-receitas');
    grid.innerHTML = bioReceitas.map(r => `
        <article class="card">
            <h3>${r.alvo}</h3>
            <p><strong>Bio-Solução:</strong> ${r.solucao}</p>
            <p style="margin-top:10px;">${r.instrucao}</p>
            <div style="margin-top:15px; font-size: 0.85rem; color: #2e7d32; font-weight: bold;">
                Impacto: ${r.beneficio}
            </div>
        </article>
    `).join('');
}

// 3. Calculadora de Aplicação (Alqueire -> Hectare -> Total) [Conversa]
function calcularAplicacao() {
    const substancia = document.getElementById('nome-insumo').value;
    const doseHa = parseFloat(document.getElementById('dose-ha').value);
    const alqueires = parseFloat(document.getElementById('area-alqueire').value);
    const box = document.getElementById('resultado-final');

    if (!substancia || isNaN(doseHa) || isNaN(alqueires)) {
        alert("Por favor, preencha todos os campos corretamente para o cálculo.");
        return;
    }

    // 1 Alqueire Paulista = 2,42 Hectares [IBGE/Conversa]
    const hectaresTotais = alqueires * 2.42;
    const volumeTotal = (doseHa * hectaresTotais).toFixed(2);

    box.style.display = "block";
    box.innerHTML = `
        <h3>✅ Cálculo Concluído para ${substancia}:</h3>
        <p style="font-size: 1.4rem; margin: 10px 0;">
            Você deve utilizar um total de <strong>${volumeTotal} Litros (ou ml)</strong> nos seus ${alqueires} alqueires.
        </p>
        <p style="font-size: 0.9rem;">Área correspondente: ${hectaresTotais.toFixed(2)} hectares.</p>
    `;
}

// 4. Funções de Acessibilidade [Conversa]
function mudarTema() {
    document.body.classList.toggle('dark-theme');
}

let fontSize = 16;
function ajustarFonte(acao) {
    const html = document.documentElement;
    if (acao === 'aumentar' && fontSize < 24) fontSize += 2;
    if (acao === 'diminuir' && fontSize > 12) fontSize -= 2;
    html.style.setProperty('--base-font-size', `${fontSize}px`);
}

// Inicialização
window.onload = carregarReceitas;
