import { setup, voiceSetup } from "./components/helpers.js";
import responseFunc from "./components/conditions.js";
const btn = document.querySelector(".talk");
const speechToText = document.querySelector(".speech-to-text");
const MySpeechRecognition = window.webkitSpeechRecognition;
const recognition = new MySpeechRecognition();
let voices;
setup();
let log = [];
let convoLog = [];
export let moodLevels = {
    moodLevel: 0,
};
let recentMoodLog = [0, 0, 0];
let recentMood = 0;
recognition.onstart = () => {
    console.log("listening");
    setTimeout(() => {
        recognition.start();
    }, 6000);
};
recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    speechToText.textContent = transcript;
    readOutLoud(transcript);
};
//listener
btn.addEventListener("click", () => {
    recognition.start();
});
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    voiceSetup(speech, voices);
    responseFunc(message, speech);
    convoLog.push(`Orson: ${message}`, `Bot: ${speech.text}`);
    log.push(speech.text);
    console.log(log);
    console.log(convoLog);
    console.log(moodLevels.moodLevel);
    window.speechSynthesis.speak(speech);
    setTimeout(() => {
        recognition.start();
    }, 1000);
}
