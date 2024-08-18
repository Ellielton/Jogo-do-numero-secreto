//Manipula os valores na função gerarAleatoria e na tela
const menorValor = 0
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  //Arendonda random pra cima, multipraco por maiorValor que inclusivo com +1
  return parseInt(Math.random() * maiorValor + 1)
}
console.log(`O número secreto é ${numeroSecreto}`)

//Captura e atualizar a faixa de valores na tela.
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML= menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML= maiorValor;