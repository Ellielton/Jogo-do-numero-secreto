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
  // console.log(e.target.lang) 
  verificaSeChutePossuiValorValido(chute) 
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
  `
}