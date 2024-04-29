const palavras: string[] = [
  "livro",
  "caixa",
  "forno",
  "cacho",
  "chuva",
  "coral",
  "papel",
  "trigo",
  "tecla",
  "creme",
];
let certo = palavras[Math.floor(Math.random() * 10)].split("");
let tentativas = 0;

function juntaTudo() {
  const palavraElement = document.getElementById(
    "palavraa"
  ) as HTMLInputElement;
  const resultadoElement = document.getElementById(
    "resultado"
  ) as HTMLDivElement;
  const enviarElement = document.getElementById("enviar") as HTMLButtonElement;
  if (palavraElement && resultadoElement) {
    const palavraX = palavraElement.value;
    let palavraArray = palavraViraArray(palavraX);
    if (validacaoPalavra(palavraArray)) {
      let index = avaliaPalavra(palavraArray, certo);
      tentativas++;
      atualizarContador(tentativas);
      resultadoElement.innerHTML = imprimePalavra(palavraArray, index);
      acertou(index, enviarElement);
      tentativasAcabou(tentativas, enviarElement);
    }
  } else {
    console.error("Elemento 'palavraa' ou 'resultado' não encontrado!");
  }
}

function validacaoPalavra(palavra: string[]): boolean {
  if (palavra.length !== 5) {
    alert("A palavra precisa ter 5 caracteres!");
    return false;
  }
  return true;
}

function palavraViraArray(palavra: string): string[] {
  return palavra.toLowerCase().split("");
}

function avaliaPalavra(palavra: string[], certo: string[]): number[] {
  let indexErrados: number[] = [];
  for (let i = 0; i < 5; i++) {
    if (palavra[i] !== certo[i]) {
      indexErrados.push(i);
    }
  }
  return indexErrados;
}

function imprimeLetraCerta(letra: string) {
  return `<p class="btn btn-success">${letra}</p>`;
}

function imprimeLetraErrada(letra: string) {
  return `<p  class="btn btn-warning">${letra}</p>`;
}

function imprimePalavra(palavra: string[], indexErrados: number[]): string {
  let retorno: string = "";
  for (let i = 0; i < 5; i++) {
    if (indexErrados.indexOf(i) !== -1) {
      retorno += imprimeLetraErrada(palavra[i]);
    } else {
      retorno += imprimeLetraCerta(palavra[i]);
    }
  }
  return retorno;
}

function novaTentativa() {
  const palavraElement = document.getElementById(
    "palavraa"
  ) as HTMLInputElement;
  const resultadoElement = document.getElementById("resultado");
  const enviarElement = document.getElementById("enviar") as HTMLButtonElement;

  certo = palavras[Math.floor(Math.random() * 10)].split("");
  console.log(certo);
  if (palavraElement && resultadoElement) {
    palavraElement.value = "";
    resultadoElement.innerHTML = "";
    tentativas = 0;
    enviarElement.disabled = false;
  } else {
    console.error("Elemento 'palavraa' ou 'resultado' não encontrado!");
  }
}

function acertou(index: number[], botao: HTMLButtonElement) {
  if (index.length === 0) {
    alert("Parabéns! Você acertou!");
    botao.disabled = true;
  }
}

function tentativasAcabou(tentou: number, botao: HTMLButtonElement) {
  if (tentou === 5) {
    alert("Número de tentativas esgotadas! Tente novamente!");
    botao.disabled = true;
  }
}

function atualizarContador(valor) {
  document.getElementById("tentativas").innerText = "Tentativas: " + valor;
}

document.addEventListener("DOMContentLoaded", function () {
  atualizarContador(tentativas);
});
