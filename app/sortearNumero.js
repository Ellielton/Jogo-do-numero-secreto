const nuemroAleatorio = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100)
}
console.log(`O número secreto é ${nuemroAleatorio}`)