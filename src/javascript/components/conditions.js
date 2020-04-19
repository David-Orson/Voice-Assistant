import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels, todoList } from "../app.js";
import { todoRender } from "./renderers.js";
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
    else if (message.includes("make a list item")) {
        todoRender(message, todoList);
        speech.text = "Anything else?";
    }
    else {
        speech.text = "I don't know what you said";
    }
}
export default responseFunc;
