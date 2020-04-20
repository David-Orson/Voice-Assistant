import { setup, voiceSetup } from "./components/helpers.js";
import responseFunc from "./components/conditions.js";
import { objRender } from "./components/renderers.js";

const btn: any = document.querySelector(".talk");
const speechToText: any = document.querySelector(".speech-to-text");

export const todoList = document.querySelector(".todo-list");

const MySpeechRecognition = window.webkitSpeechRecognition;
const recognition = new MySpeechRecognition();

let voices: any;

setup();

let log: any = [];
let convoLog: any = [];
export let moodLevels: any = {
  moodLevel: 0,
  recentMood: 0,
  recentMoodLog: [0, 0, 0],
};
export let todoObj: any = {
  trash: "trash",
};

recognition.onstart = () => {
  console.log("listening");
  setTimeout(() => {
    recognition.start();
  }, 6000);
};

recognition.onresult = (event: any) => {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  speechToText.textContent = transcript;
  readOutLoud(transcript);
};

//listener

btn.addEventListener("click", () => {
  recognition.start();
});

export let subject: any = [];

function readOutLoud(message: any) {
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
  setTimeout(() => {
    recognition.start();
  }, 1000);
}

// ToDo
// hide/display list
// Time based Logic
// Memories
