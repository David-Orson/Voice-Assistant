import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels, todoList, subject, indexer, todoObj } from "../app.js";
import { todoDelete, objRender } from "./renderers.js";

function responseFunc(message: any, speech: any, subject: any, todoObj: any) {
  if (subject[0] == "list") {
    listConvo(message, speech, subject, todoObj);
  } else {
    if (message.includes("how are you")) {
      let response: any;
      mood1();
      if (moodLevels.moodLevel > 1) {
        response = "good";
      } else {
        response = "ok";
      }
      speech.text = response;
    } else if (message.includes("make a list item")) {
      speech.text = "Anything else?";
      subject.push("list");
      let listValue = message.slice(23);
      todoObj[listValue] = listValue;
    } else if (message.includes("delete list item")) {
      // todoDelete(message);
    } else {
      speech.text = "I don't know what you said";
    }
  }
}

function listConvo(message: any, speech: any, subject: any, todoObj: any) {
  if (message.includes("and")) {
    speech.text = "sure, any more?";
    let listValue = message.slice(4);
    todoObj[listValue] = listValue;
  } else if (message.includes("no")) {
    speech.text = "no problem";
    subject.pop();
  } else if (message.includes("show me")) {
    objRender(todoObj, todoList);
    speech.text = "sure";
  } else {
    speech.text = "lets finish the subject";
  }
}

export default responseFunc;
