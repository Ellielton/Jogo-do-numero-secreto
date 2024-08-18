//Manipula os valores na função gerarAleatoria e na tela
const menorVAlor = 5
const maiorValor = 100
const nuemroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  //Arendonda random pra cima, multipraco por maiorValor que inclusivo com +1
  return parseInt(Math.random() * maiorValor + 1)
}
console.log(`O número secreto é ${nuemroAleatorio}`)

//Captura e atualizar a faixa de valores na tela.
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML= menorVAlor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML= maiorValor;