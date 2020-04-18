const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

let voices;

function setVoice() {
  voices = window.speechSynthesis.getVoices();
}

setVoice();

const howareyou = [
  "I'm doing fine, thanks",
  "doing good",
  "not bad",
  "could be better",
  "feeling well, thanks",
];

const greetings = {
  morning: ["good morning David"],
  afternoon: ["good afternoon David"],
  evening: [
    "good evening David",
    "what shall we do this evening?",
    "hi",
    "lets get to work!",
  ],
  night: ["you are up late David"],
};

const mood = [
  "happy",
  "bored",
  "upset",
  "normal",
  "restless",
  "annoyed",
  "cheerful",
  "reflective",
];

const appreciation = ["thanks", "aww thanks", "hell yeah"];

const simpleExcl = ["oh", "hmm", "hmph", "ok", "alright"];

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activated");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

let log = [];
let convoLog = [];
let moodLevel = 0;
let recentMoodLog = [0, 0, 0];
let recentMood = 0;
let memories = {
  created: {
    date: "18th April 2020",
    memory: "I was created",
  },
  mood: {
    date: "18th April 2020",
    memory: "You added my mood functionality",
  },
  memory: {
    date: "18th April 2020",
    memory: "you gave me memories",
  },
};

function mood1() {
  moodLevel += 1;
  let oldMood = recentMoodLog.shift();
  recentMoodLog.push(oldMood + 1);
  recentMood = recentMoodLog.reduce((a, b) => a + b);
}

function mood10() {
  moodLevel += 10;
  recentMoodLog.push(10);
  recentMoodLog.shift();
  recentMood = recentMoodLog.reduce((a, b) => a + b);
}

function moodLess10() {
  moodLevel -= 10;
  recentMoodLog.push(-10);
  recentMoodLog.shift();
  recentMood = recentMoodLog.reduce((a, b) => a + b);
}

function readOutLoud(message) {
  const voices = window.speechSynthesis.getVoices();
  const speech = new SpeechSynthesisUtterance();

  if (message.includes("how are you")) {
    // hook up to external responses
    let finalText;
    if (moodLevel > 19) {
      finalText = "good";
      speech.text = finalText;
    } else if (moodLevel <= 19 && moodLevel > -20) {
      finalText = "ok";
      speech.text = finalText;
    } else {
      finalText = "not great";
      speech.text = finalText;
    }
    mood1();
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("hello")) {
    let myDate = new Date();
    let d = myDate.getHours();
    console.log(d);
    let responseKey;
    if (d > 3 && d <= 11) {
      responseKey = "morning";
    } else if (d > 11 && d <= 16) {
      responseKey = "afternoon";
    } else if (d > 16 && d <= 22) {
      responseKey = "evening";
    } else {
      responseKey = "night";
    }

    const finalText =
      greetings[responseKey][
        Math.floor(Math.random() * greetings[responseKey].length)
      ];
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("what is your mood level")) {
    const finalText = moodLevel;
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("what is your recent mood level")) {
    const finalText = recentMood;
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("say that again")) {
    const finalText = `I said ${log[log.length - 1]}`;
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("what do you think I said")) {
    const finalText = `I think you said ${convoLog[convoLog.length - 2]}`;
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("good job")) {
    const finalText =
      appreciation[Math.floor(Math.random() * appreciation.length)];
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
    mood10();
  } else if (message.includes("not good enough")) {
    const finalText = simpleExcl[Math.floor(Math.random() * simpleExcl.length)];
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
    moodLess10();
  } else if (message.includes("why")) {
    const finalText = "I guess something went wrong";
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else if (message.includes("tell me a memory")) {
    let mems = Object.keys(memories);
    let mem = mems[Math.floor(Math.random() * mems.length)];
    const finalText = `I remember when ${memories[mem].memory}`;
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  } else {
    const finalText = "i dont know what you said";
    speech.text = finalText;
    log.push(finalText);
    convoLog.push(`Orson: ${message}`, `Bot: ${finalText}`);
  }

  console.log(log);
  console.log(convoLog);
  console.log(moodLevel);
  console.log(recentMoodLog);
  console.log(recentMood);

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
