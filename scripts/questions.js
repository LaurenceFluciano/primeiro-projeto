/**
 * OBSERVAÇÃO:
 * Os dados do quiz estão embutidos diretamente no código.
 * Na época da criação, eu ainda não conhecia APIs ou carregamento dinâmico de dados.
 * Hoje, o ideal seria separar os dados em um backend ou arquivo JSON, com chamadas via fetch().
 */

let Originalacido = [
    Q1 = {
        question: "Qual a definição de um ácido?",
        answer: {
            a: "Um Hidrogenio",
            b: "Em solução aquosa libera os íons cátions H+",
            c: "Em solução aquosa libera os íons ânions H+",
            d: "Em solução aquosa libera os íons cátions H-"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Segundo Arrhenius, todo ácido em solução aquosa libera os íons cátions H+, ou seja, sofre ionização."
    }, 
    
    Q2 = {
        question: "O que é um hidrácido?",
        answer: {
            a: "É um ácido que contem Oxigênio",
            b: "São ácidos fracos",
            c: "São ácidos fortes",
            d: "É um ácido que não contem Oxigênio"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Um hidrácido é um ácido que em sua composição não tem Oxigênio, por exemplo: HCl (Ácido cloridrico) HF (Ácido fluoridirco)"
    }, 

    Q3 = {
        question: "O que é um Oxiácido?",
        answer: {
            a: "É um ácido que contem Oxigênio",
            b: "São ácidos fracos",
            c: "São ácidos fortes",
            d: "É um ácido que não contem Oxigênio"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Um oxiácido é um ácido que em sua composição tem Oxigênio, por exemplo: H2SO4(Ácido sulfúrico) H3PO4 (Ácido fosfórico)."
    },

    Q4 = {
        question: "Qual desses elementos é o ácido sulfúrico",
        answer: {
            a: "H2SO2",
            b: "H2SO4",
            c: "H2SO3",
            d: "HCl"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Os H2SO2, H2SO3 e HCl, são respectivamente os ácidos: Ácido hiposulfuroso, Ácido sulfuroso e Ácido clorídrico"
    },

    Q5 = {
        question: "Qual desses ácidos é um monoácido?",
        answer: {
            a: "H3SO4",
            b: "H3PO4",
            c: "H2S",
            d: "HCl"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Um monoácido é todo ácido que tem apenas um hidrogênio em sua composição."
    },

    Q6 = {
        question: "Qual desses ácidos é um diácido?",
        answer: {
            a: "H3SO4",
            b: "HF",
            c: "H2S",
            d: "HCl"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O H2S é um diácido, pois, tem dois hidrogênios nele."
    },

    Q7 = {
        question: "O HF é o ácido:",
        answer: {
            a: "Clorídrico",
            b: "Sulfurico",
            c: "Fluorídrico",
            d: "Fluoroso"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O  hidrogênio(H) e o fluor (F) juntos, são chamados de ácido fluorídrico. Usa a terminação -ídrico, pois, é um hidrácido."
    },

    Q8 = {
        question: "Qual desses ácidos é utilizado para a fabricação de explosivos",
        answer: {
            a: "HNO3",
            b: "HF",
            c: "HCN",
            d: "HCl"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O HNO3 serve para fazer dinamites (TNT)."
    },

    Q9 = {
        question: "O HCl é o ácido:",
        answer: {
            a: "clórico",
            b: "sulfuroso",
            c: "cloroso",
            d: "clorídrico"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é ácido cloridrico."
    },

    Q10 = {
        question: "O ácido sulfurico pode ser utilizado para a produção de: ",
        answer: {
            a: "Computador",
            b: "Panos",
            c: "Baterias",
            d: "Produção de alimentos"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Baterias devido sua capacidade de reagir com metais e produzir eletrecidade."
    },
]

let Originalbase = [

    Q1 = {
        question: "(UEPG-PR) Com relação às propriedades das bases de Arrhenius, é incorreto afirmar:",
        answer: {
            a: "O hidróxido de amônio é uma base não metálica, bastante solúvel em água.",
            b: "Os metais alcalinos formam monobases com alto grau de dissociação.",
            c: "As bases formadas pelos metais alcalinos terrosos são fracas, visto que são moleculares por natureza.",
            d: "Os hidróxidos dos metais alcalinos terrosos são pouco solúveis em água."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Letra (c) está errado, pois, as bases formadas pelos metais alcalinos terrosos são fortes."
    },

    Q2 = {
        question: "Qual a definição de uma base?",
        answer: {
            a: "liberan íons hidroxila (-OH)",
            b: "liberan íons cátions hidroxila (-OH)",
            c: "liberan íons ânions hidroxila (+OH)",
            d: "liberan íons hidroxila (+OH)"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Ela libera os íons (-OH) em meio aquoso."
    },

    Q3 = {
        question: "Qual desses compostos é uma base?",
        answer: {
            a: "HCl",
            b: "Ca3(BO3)2",
            c: "KOH",
            d: "H2SO4"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A resposta correta é KOH, pois ela é uma base, já o Ca3(BO3)2 ele é um hidróxi-sal. Normalmente as bases no final tem sempre o -OH"
    },
    
    Q4 = {
        question: "A base tem um pH:",
        answer: {
            a: "Igual a 7",
            b: "Menor que 7",
            c: "Igual a 1",
            d: "Maior que 7"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O pH das bases é sempre maior do que 7, pois, tem caráter básico."
    },

    Q5 = {
        question: "Qual deles é uma Dibase: ",
        answer: {
            a: "NaOH",
            b: "AgOH",
            c: "Ca(OH)2",
            d: "Al(OH)3"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é Ca(OH)2, pois tem duas hidroxilas."
    },

    Q6 = {
        question: "Quando a base é considerada forte?",
        answer: {
            a: "Aquela que se dissocia completamente em uma solução e tem pH baixo.",
            b: "Aquela que não se dissocia completamente em uma solução e tem pH baixo.",
            c: "Aquela que não se dissocia completamente em uma solução e tem pH alto.",
            d: "Aquela que se dissocia completamente em uma solução e tem pH alto."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Quando uma base se dissocia e libera íons (OH-). Como ela libera grandes quantidades de (OH-) seu pH é considerado alto, ou seja, acima de 7."
    },

    Q7 = {
        question: "Quais dessas bases é considerada forte?",
        answer: {
            a: "Sr(OH)2 - Al(OH)3 - Ca(OH)2",
            b: "Sr(OH)2 - Au(OH)3 - Ca(OH)2",
            c: "Ca(OH)2 - Sr(OH)2 - Ba(OH)2",
            d: "Ca(OH)2 - Al(OH)3 - Ba(OH)2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "As bases ( Ca(OH)2 - Sr(OH)2 - Ba(OH)2 ), são consideradas fortes."
    },

    Q8 = {
        question: "Selecione qual desses elementos abaixos é uma base: ",
        answer: {
            a: "Sn(OH)4",
            b: "HCl",
            c: "NaCl",
            d: "H2SO4"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A resposta correta é o Sn(OH)4, pois, há presença de hidroxilas (-OH)."
    },

    Q9 = {
        question: "Selecione qual desses elementos abaixos é uma base: ",
        answer: {
            a: "AgCl",
            b: "HCl",
            c: "KOH",
            d: "K2CO3"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A resposta correta é o KOH, pois, há presença de hidroxilas (-OH)."
    },

    Q10 = {
        question: "Selecione qual desses elementos abaixos é uma base: ",
        answer: {
            a: "NaNO3",
            b: "NaOH",
            c: "Na2CO3",
            d: "NaHCO3"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A resposta correta é o NaOH, pois, há presença de hidroxilas (-OH)."
    },

]
let Originalreaçao = [

    Q1 = {
        question: "A reação: HCl (ácido clorídrico) + NaOH (hidróxido de sódio) → NaCl (cloreto de sódio) + H2O (água). É uma reação de:",
        answer: {
            a: "Neutralização",
            b: "Tripla troca",
            c: "Simples troca",
            d: "Nenhuma das alternativas"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Ela é uma reação de neutralização ou dupla troca, pois, O HCl + NaOH, neutraliza formando um sal e água, logo é uma reação de neutralização "
    },

    Q2 = {
        question: "A reação: ácido + base é considerada:",
        answer: {
            a: "Reação de neutralização",
            b: "Reação ionica",
            c: "Oxirredução",
            d: "Reação de simples troca"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Quando reagimos um ácido com uma base é chamada de reação de neutralização assim formando um sal e água."
    },

    Q3 = {
        question: "(UEPI) O sangue do diabo é um líquido vermelho que logo se descora ao ser aspergido sobre um tecido branco. Para prepará-lo, adiciona-se NH4OH em água, contendo algumas gotas de fenolftaleína. A cor desaparece porque:",
        answer: {
            a: "O tecido branco reage com a solução formando ácido amoníaco.",
            b: "A fenolftaleína evapora.",
            c: "A fenolftaleína reage rapidamente com o NH4OH.",
            d: "O NH3 logo evapora."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O hidróxido de amônio é um composto instável e se decompõe rapidamente em amônia e água, além da amônia também evaporar, por isso que a solução mesmo manchando o tecido branco, ele volta com sua cor original."
    },

    Q4 = {
        question: "O nome dessa reação: 2 NaN3 → 3 N2 + 2 Na",
        answer: {
            a: "Reação de neutralização.",
            b: "Reação de simples troca.",
            c: "Reação de decomposição.",
            d: "Reação de adição."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Uma reação de decomposição é quando uma substância origina duas, veja a fórmula: A → B + C. (ATENÇÃO: observe a flecha)"
    },

    Q5 = {
        question: "Observe a reação: H2SO4 + KOH → K2SO4 + H2O. Qual o nome dela?",
        answer: {
            a: "Reação de dupla troca.",
            b: "Reação de simples troca.",
            c: "Reação de decomposição.",
            d: "Reação de adição."
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Neutralização, pois, reage ácido (H2SO4) + base (KOH) formando um sal (K2SO4) e água (H2O)."
    },

    Q6 = {
        question: "Observe a reação: CH4(g) + 2 O2(g) → CO2(g) + 2 H2O(g). Qual o nome dela?",
        answer: {
            a: "Reação de neutralização.",
            b: "Reação de combustão incompleta.",
            c: "Reação de decomposição.",
            d: "Reação de combustão completa."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Combustão completa, pois, o metano foi totalmente oxidado, resultando em dióxido de carbono (CO2) e água (H2O) como produtos. Logo não há resíduos de combustão."
    },

    Q7 = {
        question: "Observe a reação: 3 H2 + 1 N2 → 2 NH3. Qual o nome dela?",
        answer: {
            a: "Reação de neutralização.",
            b: "Reação de dupla troca.",
            c: "Reação de síntese ou adição",
            d: "Reação de combustão completa."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Reação de síntese ou adição, pois, como formula temos: A + B → C. O que ocorrre acima."
    },

    Q8 = {
        question: "Observe a reação: 2 Mg(s) + 1 O2 → 2 MgO(s). Qual o nome dela?",
        answer: {
            a: "Reação de neutralização.",
            b: "Reação de dupla troca.",
            c: "Reação de síntese ou adição",
            d: "Reação de decomposição."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Reação de síntese ou adição, pois, como formula temos: A + B → C. O que ocorrre acima."
    },

    Q9 = {
        question: "Observe a reação: SO2 + H2O → H2SO3. Qual o nome dela?",
        answer: {
            a: "Reação de neutralização.",
            b: "Reação de oxirredução.",
            c: "Reação de decomposição",
            d: "Reação de óxido ácido."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Reação de óxido ácido, pois, a reação de óxido ácido + água (SO2 + H2O), forma um ácido (H2SO3)."
    },

    Q10 = {
        question: "Observe a reação: Na2O + H2O → 2 NaOH. Qual o nome dela?",
        answer: {
            a: "Reação de óxido básico.",
            b: "Reação de oxirredução.",
            c: "Reação de síntese ou adição",
            d: "Reação de óxido ácido."
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Reação de óxido básico, pois, a reação de óxido básico + água (Na2O + H2O), forma uma base (NaOH)."
    },

    Q11 = {
        question: "Dentre as reações químicas abaixo, qual delas pode ser identificada como reação de dupla troca?",
        answer: {
            a: "C + O2  → CO2",
            b: "2 NaN3 → 2 N2 + 2 Na",
            c: "CuSO4 + 2 NaOH → Na2SO4 + Cu(OH)2",
            d: "6 H2O + 6 CO2 → 6O2 +  C6H12O6"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é: CuSO4 + 2 NaOH → Na2SO4 + Cu(OH)2. Observe a fórmula geral: AB + CD → AD + CB ou AB + CD -> AD + BC. Observe que inverteu o NaOH -> Cu(OH)2 -- CuSO4 -> Na2SO4."
    },

    Q12 = {
        question: "(Difícil) Quando se adiciona cal hidratada (hidróxido de cálcio) a uma solução aquosa de sulfato de alumínio (substância coagulante usada para floculação no tratamento de água), o cálcio se une ao fosfato, e o alumínio se liga ao hidróxido, dando origem a um precipitado branco. Qual das alternativas representa a equação correta?",
        answer: {
            a: "3 Ca(OH)2(aq) + Al5(SO4)3(aq) → 2 Al(OH)3(aq) + 8 CaSO4(s)",
            b: "3 Ca(OH)2(aq) + Al2(SO4)3(aq) → 2 Al(OH)3(aq) + 3 CaSO4(s)",
            c: "CuSO4 + 2 NaOH → Na2SO4 + Cu(OH)2",
            d: "2 Ca(OH).H2O(aq) + Al2(SO4)3(aq) → Al(OH)3(aq) + 2 CaSO4(s)"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A equação correta é: 3 Ca(OH)2(aq) + Al2(SO4)3(aq) → 2 Al(OH)3(aq) + 3 CaSO4(s)"
    },

    Q13 = {
        question: "(Difícil) Qual a equação de dupla troca correta para: H3PO4 + Na2S → ? + ?",
        answer: {
            a: "2 H3PO4 + 3 Na2S → 3 PO4Na3 + 3 SH2",
            b: "2 H3PO4 + 3 Na2S →  H2PO4 + 3 H2S",
            c: "2 H3PO4 + 3 Na2S → 2 Na3PO4 +  SH2",
            d: "2 H3PO4 + 3 Na2S → 2 Na3PO4 + 3 H2S"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A equação correta é: 2 H3PO4 + 3 Na2S → 2 Na3PO4 + 3 H2S. Fórmula geral"
    },

    Q14 = {
        question: "Qual o nome dessa reação: Al(OH)­3 + 3 NH4Cl → 3 NH4OH + AlCl3",
        answer: {
            a: "Reação de dupla troca",
            b: "Reação de adição",
            c: "Reação de decomposição",
            d: "Reação de simples troca"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A reação é de dupla troca, pois como podemos observar há uma substituição de elementos."
    },

    Q15 = {
        question: "Qual o nome dessa reação: H3PO4 + 3 NaCN → Na3PO4 + 3 HCN",
        answer: {
            a: "Reação de decomposição",
            b: "Reação de adição",
            c: "Reação de dupla troca",
            d: "Reação de simples troca"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A reação é de dupla troca, pois como podemos observar há uma substituição de elementos."
    },

    Q16 = {
        question: "Qual o nome dessa reação: CH4(g) + 3/2 O2(g) → CO(g) + 2 H2O(g)",
        answer: {
            a: "Reação de decomposição",
            b: "Reação de adição",
            c: "Reação de dupla troca",
            d: "Reação de combustão incompleta"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de combustão incompleta, pois há presença de oxigênio, além de formar CO + 2 H2O."
    },

    Q17 = {
        question: "Qual o nome dessa reação: Cu(s) + 2 AgNO3(aq) → 2 Ag(s) + Cu(NO3)2(aq)",
        answer: {
            a: "Reação de decomposição",
            b: "Reação de adição",
            c: "Reação de dupla troca",
            d: "Reação de simples troca"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de simples troca, pois são reações em que uma substância simples reage com uma composta."
    },

    Q18 = {
        question: "Qual o nome dessa reação: 2 HCl + Zn → ZnCl2 + H2",
        answer: {
            a: "Reação de decomposição",
            b: "Reação de substituição",
            c: "Reação de dupla troca",
            d: "Reação de neutralização"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de simples troca ou substituição, pois são reações em que uma substância simples reage com uma composta."
    },

    Q19 = {
        question: "Qual o nome dessa reação: C4H10(g) + 5 O2(g) → 8 C(g) + 10 H2O(g) ",
        answer: {
            a: "Reação de decomposição",
            b: "Reação de substituição",
            c: "Reação de combustão incompleta",
            d: "Reação de neutralização"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de combustão incompleta, pois há presença de oxigênio."
    },

    Q20 = {
        question: "Qual o nome dessa reação: CaO  +  H2O  →  Ca(OH)2",
        answer: {
            a: "Reação de síntese",
            b: "Reação de substituição",
            c: "Reação de combustão incompleta",
            d: "Reação de neutralização"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de síntese ou adição, pois A + B -> C."
    },

    Q21 = {
        question: "Qual o nome dessa reação: H2CO3 -> H2O + CO2",
        answer: {
            a: "Reação de síntese",
            b: "Reação de decomposição",
            c: "Reação de combustão incompleta",
            d: "Reação de neutralização"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de decomposição, pois C -> A + B."
    },

    
    Q22 = {
        question: "Qual o nome dessa reação: NH4NO3(s) → N2(g) + 2 H2O(g)",
        answer: {
            a: "Reação de síntese",
            b: "Reação de adição",
            c: "Reação de combustão incompleta",
            d: "Reação de decomposição"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de decomposição, pois C -> A + B."
    },

        
    Q23 = {
        question: "Qual o nome dessa reação: 2 H2O2(l) → 2 H2O(g) + O2(g)",
        answer: {
            a: "Reação de neutralização",
            b: "Reação de adição",
            c: "Reação de combustão incompleta",
            d: "Reação de decomposição"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de decomposição, pois C -> A + B."
    },

    Q24 = {
        question: "Qual o nome dessa reação: 2 HgO(s) → 2 Hg(l) + O2(g)",
        answer: {
            a: "Reação de neutralização",
            b: "Reação de adição",
            c: "Reação de decomposição",
            d: "Reação de combustão incompleta"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de decomposição, pois C -> A + B."
    },

    Q25 = {
        question: "Qual o nome dessa reação: KClO4(s) → KCl(s) + 2 O2(g)",
        answer: {
            a: "Reação de neutralização",
            b: "Reação de decomposição",
            c: "Reação de adição",
            d: "Reação de combustão incompleta"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é reação de decomposição, pois C -> A + B."
    },
]

let Originalsal = [

    Q1 = {
        question: "O ácido clórico é utilizado para produzir um determinado sal para a produção de fogos de artifício. Qual é esse sal?",
        answer: {
            a: "Sal cloreto de magnésio (MgCl2)",
            b: "Sal cloreto de potássio (KClO3)",
            c: "Sal cloreto de sódio (NaCl)",
            d: "Sal cloreto de amónio (NH4Cl)"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Para a produçã ode fogos de artifício é utilizado o KClO3."
    },

    Q2 = {
        question: "Na reação: HCl + NaOH → NaCl + H2O. Formou um: ",
        answer: {
            a: "Sal neutro",
            b: "Sal parcialmente ácido",
            c: "Sal parcialmente básico",
            d: "Óxido"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Os íons cátions do hidrônio (H+), reagem com os íons ânions da hidroxila (OH-), após a reação o sal se torna neutro, pois, a carga elétrica total é igual a 0 e não existir nenhuma hidroxila ou acido na composição final (NaCl + H2O), para ser a (B) ou a (C)."
    },

    Q3 = {
        question: "Os sais podem ser classificados em:",
        answer: {
            a: "Sais básicos, sais covalentes, sais ácidos",
            b: "Apenas sais neutros",
            c: "Sais ácidos, sais iônicos, sais neutros",
            d: "Sais neutros, sais ácidos e sais básicos"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Os sais podem ter caráter ácido, básico ou neutro."
    },

    Q4 = {
        question: "Uma das caracterisca dos sais com relação a sua ligação é:",
        answer: {
            a: "Ligação iônica",
            b: "Ligação covalente",
            c: "Ligação iônica e metálica",
            d: "Ligação covalente e metálica"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Os sais são compostos iônicos, ou seja, conectam por ligação iônica."
    },

    Q5 = {
        question: "Quais das nomenclaturas abaixo está correta do Na2CO3",
        answer: {
            a: "Ácido carbonico",
            b: "Carbonato de sódio",
            c: "Carboneto de sódio",
            d: "Cloreto de sódio"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é carbonato de sódio."
    },

    Q6 = {
        question: "Quais desses sais tem caráter ácido",
        answer: {
            a: "NaCl",
            b: "NaHSO4",
            c: "KCl",
            d: "KNO3"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é Bissulfato de sódio (NaHSO4), pois ao dissolver em água ele libera íons de hidrônio (H3O+)."
    },

    Q7 = {
        question: "Escolha qual dessas substâncias é um sal.",
        answer: {
            a: "H2SO4",
            b: "NaOH",
            c: "HCl",
            d: "KBr"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é Brometo de potássio (KBr), pois além de ser o único sal listado é um composto iônico."
    },

    
    Q8 = {
        question: "Em um certo local tinha águas extremamente ácidas por receber um efluente de uma mina de carvão desativada, o qual continha ácido sulfúrico (H2SO4). Essa água, embora límpida, era desprovida de vida. Até que se instalou-se uma fábrica de papel e celulose que emprega hidróxido de sódio (NaOH) e carbonato de sódio (Na2CO3) em seus processos. Em pouco tempo, observou-se que, a partir do ponto em que a fábrica lança seus rejeitos no rio, a vida aquática voltou a florescer.",
        answer: {
            a: "Diluição das águas do rio pelo novo efluente lançado nele.",
            b: "Precipitação do íon sulfato na presença do efluente da nova fábrica. ",
            c: "Biodegradação do ácido sulfúrico em contato com o novo efluente descartado.",
            d: "Diminuição da acidez das águas do rio pelo efluente da fábrica de papel e celulose."
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A acidez diminui devido a reação entre o ácido liberado pela mina (H2SO4) e base liberada pela fábrica de celulose (Na2CO3), ocorrendo uma reação de neutralização."
    },

    Q9 = {
        question: "Bromato de potássio, sulfito de amônio, iodeto de sódio e nitrito de bário são representados, respectivamente, pelas seguintes fórmulas:",
        answer: {
            a: "KBrO3, (NH4)2SO3, NaI, Ba(NO2)2",
            b: "KBrO4, (NH4)2SO3, NaI, Ba(NO2)2",
            c: "KBrO3, (NH4)2SO3, NaI, Ba(NO3)2",
            d: "KBrO3, (NH4)2SO3, NaIO3, Ba(NO2)2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "KBrO3 = Bromato de potássio, (NH4)2SO3 = sulfito de amônio, NaI = iodeto de sódio e Ba(NO3)2 = nitrito de bário"
    },

    Q10 = {
        question: "Qual desses elementos não é um sal.",
        answer: {
            a: "HI",
            b: "CuSO4",
            c: "FeSO4",
            d: "NaCl"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O correto é o ácido iodídrico (HI)."
    },
]
let OriginalMassaMolarCalculos = [

    Q1 = {
        question: "A massa molar do ácido sulfurico é:",
        answer: {
            a: "95,02 g/mol",
            b: "97,01 g/mol",
            c: "98,08 g/mol",
            d: "99,01 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 98,08 g/mol, pois: H2SO4 = (2 x 1,008) + 32,06 + (16 x 4) = 98,08 g/mol"
    },

    Q2 = {
        question: "A massa molar do carbonato de cálcio (CaCO3) é:",
        answer: {
            a: "99,10 g/mol",
            b: "100,08 g/mol",
            c: "98,08 g/mol",
            d: "100,94 g/mol"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 100,08 g/mol, pois: CaCO3 = 40 + 12 + (16 x 4) ≅ 100 g/mol. Vamos para o valor mais próximo das alternativas: letra (b)"
    },

    Q3 = {
        question: "A massa molar do ácido nítrico (HNO3) é:",
        answer: {
            a: "64,20 g/mol",
            b: "63,01 g/mol",
            c: "62,00 g/mol",
            d: "65,02 g/mol"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 63,01 g/mol, pois: HNO3 = 1,008 + 14,007 + (3 x 15,999) ≅ 63,01. Vamos para o valor mais próximo das alternativas: letra (b)"
    },

    Q4 = {
        question: "A massa molar do cloreto de magnésio (MgCl2) é:",
        answer: {
            a: "98,23 g/mol",
            b: "94,11 g/mol",
            c: "96,00 g/mol",
            d: "95,21 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 95,21 g/mol, pois: MgCl2 = 24,3 + (2 x 35,4) ≅  95. Vamos para o valor mais próximo das alternativas: letra (d)"
    },

    Q5 = {
        question: "A massa molar do cloreto de sódio (NaCl) é:",
        answer: {
            a: "60,00 g/mol",
            b: "57,32 g/mol",
            c: "58,44 g/mol",
            d: "59,01 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 58,44 g/mol, pois: NaCl = 23,00 + 35,45 ≅  58. Vamos para o valor mais próximo das alternativas: letra (c)"
    },
    
    Q6 = {
        question: "A massa molar do Ácido iodídrico (HI) é:",
        answer: {
            a: "123,00 g/mol",
            b: "124,32 g/mol",
            c: "125,44 g/mol",
            d: "127,91 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 127,91 g/mol, pois: HI = 1 + 126,90 ≅  127,90. Vamos para o valor mais próximo das alternativas: letra (d)"
    },

    Q7 = {
        question: "A massa molar do Ácido clorídrico (HCl) é:",
        answer: {
            a: "38,00 g/mol",
            b: "37,32 g/mol",
            c: "36,45 g/mol",
            d: "35,91 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 36,45 g/mol, pois: HCl = 1 + 35 ≅ 36. Vamos para o valor mais próximo das alternativas: letra (c)"
    },

    Q8 = {
        question: "A massa molar do Nitrito de bário (Ba(NO3)2) é:",
        answer: {
            a: "268,04 g/mol",
            b: "261,33 g/mol",
            c: "263,45 g/mol",
            d: "262,91 g/mol"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 261,33 g/mol, pois: Ba(NO₃)₂ = 137 + 28 + 96,00 ≅ 261. Vamos para o valor mais próximo das alternativas: letra (b)"
    },

    Q9 = {
        question: "A massa molar do Ácido fosfórico (H3PO4) é:",
        answer: {
            a: "96,01 g/mol",
            b: "99,33 g/mol",
            c: "98,75 g/mol",
            d: "97,99 g/mol"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 97,99 g/mol, pois: H3PO4 = 3 + 30,97 + (4 x 16) ≅ 98. Vamos para o valor mais próximo das alternativas: letra (d)"
    },

    
    Q10 = {
        question: "A massa molar do Ácido nítrico (HNO3) é:",
        answer: {
            a: "63,01 g/mol",
            b: "64,33 g/mol",
            c: "62,75 g/mol",
            d: "66,99 g/mol"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "A massa molar é igual 63,01 g/mol, pois: HNO3 = 1 + 14 + (3 x 16) ≅ 63. Vamos para o valor mais próximo das alternativas: letra (a)"
    },
]

let OriginalBalanceamento = [
    Q1 = {
        question: "Faça o balancemaneto: Mg + HCl → MgCl2 + H2.",
        answer: {
            a: "Mg 2HCl → 2MgCl2 + 2H2",
            b: "Mg HCl → 2MgCl2 + 2H2",
            c: "Mg + 2HCl → MgCl2 + H2",
            d: "2Mg HCl → MgCl2 + 2H2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: Mg + 2HCl → MgCl2 + H2."
    },

    Q2 = {
        question: "Faça o balancemaneto: Al2O3 + HCl → AlCl3 + H2O.",
        answer: {
            a: "Al2O3 + 6HCl → 2AlCl3 + 2H2O",
            b: "Al2O3 + 6HCl → 2AlCl3 + 3H2O",
            c: "2Al2O3 + 6HCl → AlCl3 + 2H2O",
            d: "3Al2O3 + 6HCl → 3AlCl3 + H2O"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: Al2O3 + 6HCl → 2AlCl3 + 3H2O."
    },

    
    Q3 = {
        question: "Faça o balancemaneto: SO2 + NaOH → Na2SO3 + H2O.",
        answer: {
            a: "SO2 + 3NaOH → 2Na2SO3 + H2O",
            b: "2SO2 + NaOH → 2Na2SO3 + 2H2O",
            c: "SO2 + 3NaOH → Na2SO3 + H2O",
            d: "SO2 + 2NaOH → Na2SO3 + H2O"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: SO2 + 2NaOH → Na2SO3 + H2O."
    },

    Q4 = {
        question: "Faça o balancemaneto: BaO4 + HNO3 → Ba(NO3)2 + H2O2 + O2.",
        answer: {
            a: "BaO4 + 2HNO3 → 3Ba(NO3)2 + H2O2 + 4O2",
            b: "2BaO4 + HNO3 → Ba(NO3)2 + 2H2O2 + O2",
            c: "BaO4 + 2HNO3 → Ba(NO3)2 + H2O2 + O2",
            d: "3BaO4 + HNO3 → 3Ba(NO3)2 + 3H2O2 + 3O2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: BaO4 + 2HNO3 → Ba(NO3)2 + H2O2 + O2."
    },

    Q5 = {
        question: "Faça o balancemaneto: C8H18 + O2 → CO2+ H2O.",
        answer: {
            a: "C8H18 + 24/2 O2 → 8 CO2 + 9 H2O",
            b: "C8H18 + 25/2 O2 → 8 CO2 + 9 H2O",
            c: "C8H18 + 25 O2 → 4 CO2+ 6 H2O",
            d: "C8H18 + 22 O2 → 8 CO2+ 9 H2O"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: C8H18 + 25/2 O2 → 8 CO2 + 9 H2O."
    },

    Q6 = {
        question: "Faça o balancemaneto: C4H10O + O2 → CO2 + H2O .",
        answer: {
            a: "C4H10O + 2O2 → 4CO2 + 4H2O",
            b: "C4H10O + O2 → 4CO2 + 5H2O",
            c: "3C4H10O + 2O2 → 6CO2 + 4H2O",
            d: "C4H10O + 6O2 → 4CO2 + 5H2O"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: C4H10O + 6O2 → 4CO2 + 5H2O."
    },

    
    Q7 = {
        question: "Faça o balancemaneto: Al + Cl2 → AlCl3.",
        answer: {
            a: "4Al + 4Cl2 → 4AlCl3",
            b: "2Al + 2Cl2 → 2AlCl3",
            c: "2Al + 3Cl2 → 2AlCl3",
            d: "6Al + 12Cl2 → 6AlCl3"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: 2Al + 3Cl2 → 2AlCl3."
    },

        
    Q8 = {
        question: "Faça o balancemaneto: N2H4 + N2O4 → N2 + H2O.",
        answer: {
            a: "2N2H4 + N2O4 → 3N2 + 4H2O",
            b: "2N2H4 + N2O4 → 4N2 + 3H2O",
            c: "2N2H4 + N2O4 → 5N2 + 4H2O",
            d: "2N2H4 + N2O4 → 4N2 + 4H2O"
        },
        correct_to_next: {
            a: true,
            b: false,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: 2N2H4 + N2O4 → 3N2 + 4H2O."
    },

    Q9 = {
        question: "Faça o balancemaneto: CaO + H3PO4 → Ca3(PO4)2 + H2O.",
        answer: {
            a: "2CaO + H3PO4 → 2Ca3(PO4)2 + H2O",
            b: "2CaO + 3H3PO4 → Ca3(PO4)2 + 2H2O",
            c: "3CaO + 2H3PO4 → Ca3(PO4)2 + 3H2O",
            d: "4CaO + 2H3PO4 → Ca3(PO4)2 + 4H2O"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto é: 3CaO + 2H3PO4 → Ca3(PO4)2 + 3H2O."
    },

    Q10 = {
        question: "Qual das equações abaixo está balanceada de forma incorreta:",
        answer: {
            a: "1 KClO4 → 1 KCl+ 2 O2",
            b: "2 Fe + 3 H2SO4 → 1 Fe2(SO4)3 + 6 H2",
            c: "1 C12H22O11 → 12 C + 11 H2O",
            d: "2 C2H4O + 5 O2 → 4 CO2 + 4 H2O"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto correto do (2 Fe + 3 H2SO4 → 1 Fe2(SO4)3 + '6' H2) seria: 2 Fe + 3 H2SO4 → 1 Fe2(SO4)3 + '3' H2. Observe em '' o número 3."
    },

    Q11 = {
        question: "Faça o balanceamento: HgO → Hg + O2",
        answer: {
            a: "2 HgO(s) → 4 Hg(l) + 2 O2(g)",
            b: "2 HgO(s) → 2 Hg(l) + O2(g)",
            c: "HgO(s) → 2 Hg(l) + O2(g)",
            d: "HgO(s) → Hg(l) +  2 O2(g)"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto correto: 2 HgO → 2 Hg + O2."
    },

    Q12 = {
        question: "Faça o balanceamento: NaClO → NaCl + O2",
        answer: {
            a: "2 NaClO → NaCl + 2 O2",
            b: "3 NaClO → 3 NaCl + O2",
            c: "NaClO → 2NaCl + O2",
            d: "2 NaClO → 2 NaCl + O2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto correto: 2 NaClO → 2 NaCl + O2."
    },

    
    Q13 = {
        question: "Faça o balanceamento: CaCO3 → CaO + CO2",
        answer: {
            a: "2 CaCO3 → CaO + CO2",
            b: "CaCO3 → 2 CaO + 2 CO2",
            c: "3 CaCO3 → CaO + 2 CO2",
            d: "CaCO3 → CaO + CO2"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: false,
            d: true
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "Não há necessidade de balancear a equação uma vez que ela já está: CaCO3 → CaO + CO2"
    },

    Q14 = {
        question: "Faça o balanceamento: Fe + O2 → Fe2O3",
        answer: {
            a: "6 Fe + 4 O2 → 3 Fe2O3",
            b: "6 Fe + 3 O2 → 3 Fe2O3",
            c: "4 Fe + 3 O2 → 2 Fe2O3",
            d: "2 Fe + O2 → 2 Fe2O3"
        },
        correct_to_next: {
            a: false,
            b: false,
            c: true,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto correto: 4 Fe + 3 O2 → 2 Fe2O3"
    },

    Q15 = {
        question: "(Difícil) Faça o balanceamento: KMnO4 + HCl → KCl + MnCl2 + H2O + Cl2",
        answer: {
            a: "2KMnO4 + 20HCl → 2KCl + 2MnCl2 + 4H2O + 5Cl2",
            b: "2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 8H2O + 5Cl2",
            c: "2KMnO4 + 32HCl → 2KCl + 2MnCl2 + 12H2O + 4Cl2",
            d: "2KMnO4 + 10HCl → 2KCl + 2MnCl2 + 8H2O + 5Cl2"
        },
        correct_to_next: {
            a: false,
            b: true,
            c: false,
            d: false
        },
        correct: function(button,x){
            ActivateTrue(button,x);
        },
        explain: "O balancemaneto correto: 2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 8H2O + 5Cl2"
    },
]


let Originalquestions = [
    Originalacido,Originalbase,Originalsal,Originalreaçao,OriginalMassaMolarCalculos,OriginalBalanceamento
];

const letterToNumber = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
  };
  