const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//Esse escutador captura o que foi falado quando iniciar a aplicação e por meio de callback exibe escritp no console
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute) {
  //deveser inserido mais uma div dentro do elemento para exibir uma mensagem que passa pela validaca.js
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `
}