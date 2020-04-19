const btn: any = document.querySelector(".talk");
const speechToText: any = document.querySelector(".speech-to-text");

const MySpeechRecognition = window.webkitSpeechRecognition;
const recognition = new MySpeechRecognition();

let voices: any;

function setVoice() {
  voices = window.speechSynthesis.getVoices();
}

setVoice();

recognition.onstart = function () {
  console.log("listening");
  setTimeout(() => {
    recognition.start();
  }, 6000);
};

recognition.onresult = function (event: any) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  speechToText.textContent = transcript;
  readOutLoud(transcript);
};

//listener

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message: any) {
  voices = window.speechSynthesis.getVoices();
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 2;

  speech.voice = voices[2];
  console.log(voices);

  window.speechSynthesis.speak(speech);
  setTimeout(() => {
    recognition.start();
  }, 1000);
}
