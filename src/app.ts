import { setup, voiceSetup } from "./components/helpers.js";
import responseFunc from "./components/conditions.js";

const btn: any = document.querySelector(".talk");
const speechToText: any = document.querySelector(".speech-to-text");

const MySpeechRecognition = window.webkitSpeechRecognition;
const recognition = new MySpeechRecognition();

let voices: any;

setup();

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
  const speech = new SpeechSynthesisUtterance();
  voiceSetup(speech, voices);
  responseFunc(message, speech);

  window.speechSynthesis.speak(speech);
  setTimeout(() => {
    recognition.start();
  }, 1000);
}
