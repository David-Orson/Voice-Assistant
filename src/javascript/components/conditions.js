import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
function responseFunc(message, speech) {
    if (message.includes("how are you")) {
        const response = "good";
        speech.text = response;
        mood1();
    }
    else {
        speech.text = "I don't know what you said";
    }
}
export default responseFunc;
