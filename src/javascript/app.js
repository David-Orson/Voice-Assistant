"use strict";
var btn = document.querySelector(".talk");
var speechToText = document.querySelector(".speech-to-text");
var MySpeechRecognition = window.webkitSpeechRecognition;
var recognition = new MySpeechRecognition();
var voices;
function setVoice() {
    voices = window.speechSynthesis.getVoices();
}
setVoice();
recognition.onstart = function () {
    console.log("listening");
    setTimeout(function () {
        recognition.start();
    }, 6000);
};
recognition.onresult = function (event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    speechToText.textContent = transcript;
    readOutLoud(transcript);
};
//listener
btn.addEventListener("click", function () {
    recognition.start();
});
function readOutLoud(message) {
    voices = window.speechSynthesis.getVoices();
    var speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 2;
    speech.voice = voices[2];
    console.log(voices);
    window.speechSynthesis.speak(speech);
    setTimeout(function () {
        recognition.start();
    }, 1000);
}
