
function verificaSeChutePossuiValorValido(chute) {
  //Isso aqui converte numero para um numero inteiro
  const numero = +chute

  if(chuteForInvalido(numero)) {
    //inseri uma mensagem na tela quando a palavra for uma string ao invez de number
    elementoChute.innerHTML += '<div>Valor invalido!</div>'
  }

  if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
    elementoChute.innerHTML +=`
    <div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
    `
  }

  //Se o jogador acertar o número vai entrar nesse condicional
  if(numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `
  }

  
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}