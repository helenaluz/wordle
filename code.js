var palavras = [
    "livro",
    "caixa",
    "forno",
    "cacho",
    "chuva",
    "coral",
    "papel",
    "trigo",
    "tecla",
    "creme"
];
var certo = palavras[Math.floor(Math.random() * 10)].split("");
var tentativas = 0;
function juntaTudo() {
    var palavraElement = document.getElementById("palavraa");
    var resultadoElement = document.getElementById("resultado");
    var enviarElement = document.getElementById("enviar");
    if (palavraElement && resultadoElement) {
        var palavraX = palavraElement.value;
        var palavraArray = palavraViraArray(palavraX);
        if (validacaoPalavra(palavraArray)) {
            var index = avaliaPalavra(palavraArray, certo);
            tentativas++;
            acertou(index, enviarElement);
            tentativasAcabou(tentativas, enviarElement);
            resultadoElement.innerHTML = imprimePalavra(palavraArray, index);
        }
    }
    else {
        console.error("Elemento 'palavraa' ou 'resultado' não encontrado!");
    }
}
function validacaoPalavra(palavra) {
    if (palavra.length !== 5) {
        alert("A palavra precisa ter 5 caracteres!");
        return false;
    }
    return true;
}
function palavraViraArray(palavra) {
    return palavra.toLowerCase().split("");
}
function avaliaPalavra(palavra, certo) {
    var indexErrados = [];
    for (var i = 0; i < 5; i++) {
        if (palavra[i] !== certo[i]) {
            indexErrados.push(i);
        }
    }
    return indexErrados;
}
function imprimeLetraCerta(letra) {
    return "<p class=\"btn btn-success\">".concat(letra, "</p>");
}
function imprimeLetraErrada(letra) {
    return "<p  class=\"btn btn-warning\">".concat(letra, "</p>");
}
function imprimePalavra(palavra, indexErrados) {
    var retorno = "";
    for (var i = 0; i < 5; i++) {
        if (indexErrados.indexOf(i) !== -1) {
            retorno += imprimeLetraErrada(palavra[i]);
        }
        else {
            retorno += imprimeLetraCerta(palavra[i]);
        }
    }
    return retorno;
}
function novaTentativa() {
    var palavraElement = document.getElementById("palavraa");
    var resultadoElement = document.getElementById("resultado");
    var enviarElement = document.getElementById("enviar");
    certo = palavras[Math.floor(Math.random() * 10)].split("");
    console.log(certo);
    if (palavraElement && resultadoElement) {
        palavraElement.value = "";
        resultadoElement.innerHTML = "";
        tentativas = 0;
        enviarElement.disabled = false;
    }
    else {
        console.error("Elemento 'palavraa' ou 'resultado' não encontrado!");
    }
}
function acertou(index, botao) {
    if (index.length === 0) {
        alert("Parabéns! Você acertou!");
        botao.disabled = true;
    }
}
function tentativasAcabou(tentou, botao) {
    if (tentou === 5) {
        alert("Número de tentativas esgotadas! Tente novamente!");
        botao.disabled = true;
    }
}
