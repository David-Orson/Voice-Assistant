import { setup, voiceSetup } from "./components/helpers.js";
import responseFunc from "./components/conditions.js";
import { speak } from "./components/independents.js";
const btn = document.querySelector(".talk");
const speechToText = document.querySelector(".speech-to-text");
export const todoList = document.querySelector(".todo-list");
const MySpeechRecognition = window.webkitSpeechRecognition;
const recognition = new MySpeechRecognition();
recognition.onend = () => {
    recognition.start();
};
let voices;
setup();
let log = [];
let convoLog = [];
export let moodLevels = {
    moodLevel: 0,
    recentMood: 0,
    recentMoodLog: [0, 0, 0],
};
export let todoObj = {
    trash: "trash",
};
recognition.onstart = () => {
    console.log("listening");
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
    speak(voices);
});
// random interjections
export let subject = [];
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    voiceSetup(speech, voices);
    responseFunc(message, speech, subject, todoObj);
    convoLog.push(`Orson: ${message}`, `Bot: ${speech.text}`);
    log.push(speech.text);
    console.log(subject);
    console.log(log);
    console.log(convoLog);
    console.log(moodLevels.moodLevel);
    console.log(moodLevels.recentMood);
    console.log(moodLevels.recentMoodLog);
    console.log(todoObj);
    window.speechSynthesis.speak(speech);
}
// ToDo
// hide/display list
// Time based Logic
// Memories
