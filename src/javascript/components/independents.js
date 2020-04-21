import { voiceSetup } from "./helpers.js";
import { chatters } from "./responses.js";
export function speak(voices) {
    const chatter = new SpeechSynthesisUtterance();
    voiceSetup(chatter, voices);
    chatter.text = chatters[Math.floor(Math.random() * chatters.length)];
    window.speechSynthesis.speak(chatter);
    setTimeout(() => {
        speak(voices);
    }, Math.floor(Math.random() * 100000));
}
// prompt to track expenses
//
