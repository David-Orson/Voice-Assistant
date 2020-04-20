import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels, todoList } from "../app.js";
import { objDelete, objRender } from "./renderers.js";
import { appreciation } from "./responses.js";
function responseFunc(message, speech, subject, todoObj) {
    if (anyTimes(message, speech)) {
        anyTime(message, speech);
    }
    else {
        if (subject[0] == "list") {
            listConvo(message, speech, subject, todoObj);
        }
        else {
            if (message.includes("how are you") || message.includes("car")) {
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
                speech.text = "Anything else?";
                subject.push("list");
                let listValue = message.slice(24);
                todoObj[listValue] = listValue;
            }
            else if (message.includes("delete list item")) {
                objDelete(message, todoObj);
                speech.text = "deleted";
            }
            else {
                speech.text = "I don't know what you said";
            }
        }
    }
}
function listConvo(message, speech, subject, todoObj) {
    if (message.includes("and")) {
        speech.text = "sure, any more?";
        let listValue = message.slice(4);
        todoObj[listValue] = listValue;
    }
    else if (message.includes("no") || message.includes("enough")) {
        speech.text = "no problem";
        subject.pop();
    }
    else if (message.includes("show me")) {
        objRender(todoObj, todoList);
        speech.text = "sure";
    }
    else {
        speech.text = "lets finish the subject";
    }
}
function anyTime(message, speech) {
    if (message.includes("good job") || message.includes("good girl")) {
        speech.text = appreciation[Math.floor(Math.random() * appreciation.length)];
    }
}
function anyTimes(message, speech) {
    if (message.includes("good job") || message.includes("good girl")) {
        return true;
    }
    else
        return false;
}
export default responseFunc;
