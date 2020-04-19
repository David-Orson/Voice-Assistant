import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels } from "../app.js";
function responseFunc(message, speech) {
    if (message.includes("how are you")) {
        let response;
        mood1();
        if (moodLevels.moodLevel > 1) {
            response = "good";
        }
        else {
            response = "ok";
        }
        speech.text = response;
    }
    else {
        speech.text = "I don't know what you said";
    }
}
export default responseFunc;
