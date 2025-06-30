const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem é o fundou a banda My chemical romance?",
        alternativas: [
            {
                texto: "Gerard Way",
                afirmacao: "Cantor Gerard Way fundou o My Chemical Romance em 2001, logo após os ataques de 11 de setembro. "
            },
            {
                texto: "rmãos Vic Fuentes e Mike Fuentes",
                afirmacao: "A banda Pierce The Veil foi fundada pelos irmãos Vic Fuentes e Mike Fuentes. Eles formaram a banda em 2006."
            }
        ]
    },
    {
        enunciado: "Quem criou a banda slipknot?",
        alternativas: [
            {
                texto: "Shawn "Clown" Crahan, Paul Gray e Anders Colsefni",
                afirmacao: "O Slipknot foi fundado por Shawn "Clown" Crahan, Paul Gray e Anders Colsefni em Des Moines, Iowa, em 1995"
            },
            {
                texto: "Mike Shinoda, Brad Delson e Rob Bourdon.",
                afirmacao: "A banda Linkin Park foi fundada por três amigos do ensino médio: Mike Shinoda, Brad Delson e Rob Bourdon."
            }
        ]
    },
    {
        enunciado: "quem fundou a banda System of a Down?",
        alternativas: [
            {
                texto: "Serj Tankian e Daron Malakian, com a colaboração de Shavo Odadjian e John Dolmayan.",
                afirmacao: "A A banda System of a Down foi fundada por Serj Tankian e Daron Malakian, com a colaboração de Shavo Odadjian e John Dolmayan. O nome da banda foi inspirado em um poema de Daron Malakian chamado "Victims of a Down", que foi adaptado para "System of a Down" por sugestão de Shavo"
            },
            {
                texto: "onathan Davis, James "Munky" Shaffer, Reginald "Fieldy" Arvizu, Brian "Head" Welch e David Silveria.",
                afirmacao: "A banda Korn foi formada por Jonathan Davis, James "Munky" Shaffer, Reginald "Fieldy" Arvizu, Brian "Head" Welch e David Silveria. Eles se juntaram em 1993 em Bakersfield, Califórnia, após a dissolução de suas bandas anteriores, LAPD e Sexart."
            }
        ]
    },
    {
        enunciado: "Quem fundou a banda Bad Omens?",
        alternativas: [
            {
                texto: "Noah Sebastian.",
                afirmacao: "A banda Bad Omens foi fundada pelo vocalista Noah Sebastian em 2015, em Richmond, Virginia. Ele iniciou o projeto enquanto ainda tocava guitarra em outra banda."
            },
            {
                texto: "James Hetfield e Lars Ulrich.",
                afirmacao: "Os fundadores da banda Metallica são James Hetfield e Lars Ulrich. Eles se conheceram em 1981, após Ulrich colocar um anúncio em um jornal procurando músicos para formar uma banda"
            }
        ]
    },
    {
        enunciado: "Quem fundou a banda Mike Shinoda Linkin Park? ",
        alternativas: [
            {
                texto: "Mike Shinoda, Brad Delson e Rob Bourdon.",
                afirmacao: "A banda Linkin Park foi fundada por três amigos de escola: Mike Shinoda, Brad Delson e Rob Bourdon. Eles começaram a tocar juntos em Agoura Hills, Califórnia, ainda no colégio, formando a banda Xero, que mais tarde se tornaria Linkin Park."
            },
            {
                texto: "Paul Stanley e Gene Simmons.",
                afirmacao: "A banda Kiss foi fundada por Paul Stanley e Gene Simmons. Eles decidiram criar o grupo após o fim de sua banda anterior, Wicked Lester."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
