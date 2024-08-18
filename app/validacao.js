
function verificaSeChutePossuiValorValido(chute) {
  const numero = +chute

  if(chuteForInvalido(numero)) {
    console.log('Chute invalido!')
  }

  if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
    console.log(`Valor inválido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor}`)
  }
  
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}