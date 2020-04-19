import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels, todoList } from "../app.js";
import { todoRender } from "./renderers.js";
function responseFunc(message, speech, subject) {
    if (subject[0] == "list") {
        if (message.includes("and")) {
            speech.text = "sure";
            todoRender(message, todoList, 4);
        }
        else if (message.includes("forget about it")) {
            speech.text = "no problem";
            subject.pop();
        }
        else {
            speech.text = "lets finish the subject";
        }
    }
    else {
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
            todoRender(message, todoList, 24);
            speech.text = "Anything else?";
            subject.push("list");
        }
        else {
            speech.text = "I don't know what you said";
        }
    }
}
export default responseFunc;
