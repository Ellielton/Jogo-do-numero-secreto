window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//Esse escutador captura o que foi falado quando iniciar a aplicação e por meio de callback exibe escritp no console
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  console.log(e.results[0][0].transcript)
}