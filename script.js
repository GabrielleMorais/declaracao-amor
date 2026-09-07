const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");
const botaoContinuar = document.getElementById("continuar");

const mensagem = document.getElementById("mensagem");
const titulo = document.getElementById("titulo");
const botoes = document.getElementById("botoes");


// -----------------------------
// BOTÃO "NÃO"
// -----------------------------

const frasesNao = [
    "NÃO 😭",
    "Tem certeza? 🤨",
    "Pensa bem... 👀",
    "Olha o que você vai responder 😭",
    "Última chance...",
    "PQ Q VC TA TENTANDO AINDA??",
    "😭😭😭😭😭"
];

let tentativas = 0;


function fugir() {

    const limiteX = 280;
    const limiteY = 130;

    const x =
        Math.random() * limiteX - limiteX / 2;

    const y =
        Math.random() * limiteY - limiteY / 2;

    botaoNao.style.transform =
        `translate(${x}px, ${y}px)`;

    tentativas++;

    if (tentativas < frasesNao.length) {

        botaoNao.textContent =
            frasesNao[tentativas];

    } else {

        botaoNao.textContent =
            "NÃO TEM ESSA OPÇÃO 😌";
    }
}


// computador
botaoNao.addEventListener("mouseover", fugir);


// celular / iPhone
botaoNao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugir();

});


// -----------------------------
// BOTÃO "SIM"
// -----------------------------

botaoSim.addEventListener("click", function() {

    titulo.textContent =
        "EBAAA (Eu sei que você tentou clicar no não 🧐🧐)";

    mensagem.textContent =
        "Agora que você escolheu a resposta certa... tenho uma coisa pra te dizer";

    botoes.style.display =
        "none";

    botaoContinuar.style.display =
        "inline-block";

});


// -----------------------------
// DECLARAÇÃO
// -----------------------------

const declaracao = [

    "Eu queria fazer algo diferente para te lembrar do quanto você é especial para mim. (Mesmo não sabendo mexer nisso aqui)",

    "Desde que você entrou na minha vida, tudo ficou mais bonito",

    "Eu amo nossas conversas, nossas risadas e todos nossos tempinhos juntas",

    "Amo a forma como você consegue transformar momentos simples em momentos que eu quero guardar para sempre.",

    "Com você eu aprendi que amar também está nos pequenos detalhes.",

    "Está em querer contar alguma coisa e pensar primeiro em você.",

    "Está em querer dividir os dias bons e também querer você comigo nos dias difíceis.",

    "Eu não sei exatamente o que o futuro vai trazer...",

    "Mas tenho certeza que quero passar todos os dias da minha vida com você.",

    "Porque entre tantas pessoas que poderiam ter cruzado o meu caminho...",

    "Tinha que ter sido você",

    "E eu sou muito feliz por ser sua namorada ❤️",

    "E se eu pudesse escolher de novo...",

    "Eu escolheria você.",

    "De novo.",

    "E de novo.",

    "E quantas vezes fossem necessárias. ❤️",
   
    "Para todo o sempre",

    "Com amor, do seu amor"


];

let indiceDeclaracao = 0;


// -----------------------------
// BOTÃO CONTINUAR
// -----------------------------

botaoContinuar.addEventListener("click", function() {

    if (indiceDeclaracao < declaracao.length) {

        titulo.textContent =
            "Para você ❤️";

        mensagem.textContent =
            declaracao[indiceDeclaracao];

        indiceDeclaracao++;


        if (indiceDeclaracao === declaracao.length) {

            botaoContinuar.textContent =
                "Última coisinha meu neném... 🥺";
        }

    } else {

        finalizarDeclaracao();

    }

});


// -----------------------------
// FINAL
// -----------------------------

function finalizarDeclaracao() {

    titulo.textContent =
        "Eu te amo ❤️";

    mensagem.innerHTML = `
        Obrigada por ser você.<br><br>

        Obrigada por fazer parte da minha vida.<br><br>

        Obrigada por continuar escolhendo viver tudo isso comigo. 🥺❤️ <br><br>

        Mesmo nos nossos dias difíceis, eu sempre vou te escolher.
    `;

    botaoContinuar.style.display =
        "none";

}