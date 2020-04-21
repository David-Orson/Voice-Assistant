import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels, todoList, subject, todoObj } from "../app.js";
import { objDelete, objRender, clearScreen } from "./renderers.js";
import { appreciation, celebration } from "./responses.js";

function responseFunc(message: any, speech: any, subject: any, todoObj: any) {
  if (anyTimes(message)) {
    anyTime(message, speech);
  } else {
    if (subject[0] == "list") {
      listConvo(message, speech, subject, todoObj);
    } else {
      if (message.includes("how are you") || message.includes("car")) {
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
        let listValue = message.slice(24);
        todoObj[listValue] = listValue;
      } else if (message.includes("delete list item")) {
        objDelete(message, todoObj);
        speech.text = "deleted";
      } else {
        speech.text = "I don't know what you said";
      }
    }
  }
}

function listConvo(message: any, speech: any, subject: any, todoObj: any) {
  if (message.includes("and")) {
    speech.text = "sure, any more?";
    let listValue = message.slice(4);
    todoObj[listValue] = listValue;
  } else if (message.includes("no") || message.includes("enough")) {
    speech.text = "no problem";
    subject.pop();
  } else if (message.includes("show me")) {
    objRender(todoObj, todoList);
    speech.text = "sure";
  } else {
    speech.text = "lets finish the subject";
  }
}

function anyTime(message: any, speech: any) {
  if (message.includes("good job") || message.includes("good girl")) {
    speech.text = appreciation[Math.floor(Math.random() * appreciation.length)];
  } else if (message.includes("hell yeah")) {
    speech.text = celebration[Math.floor(Math.random() * celebration.length)];
  } else if (message.includes("clear screen")) {
    clearScreen();
  } else if (message.includes("change the subject to")) {
    subject.push(message.slice(22));
    speech.text = `sure, lets talk about ${message.slice(22)}`;
  } else if (message.includes("let's talk about")) {
    subject.push(message.slice(17));
    speech.text = `sure, lets talk about ${message.slice(17)}`;
  } else if (message.includes("clear subject")) {
    subject.pop();
    speech.text = "sure, let's move on";
  }
}

function anyTimes(message: any) {
  if (
    message.includes("good job") ||
    message.includes("good girl") ||
    message.includes("hell yeah") ||
    message.includes("clear screen") ||
    message.includes("change the subject to") ||
    message.includes("let's talk about") ||
    message.includes("clear subject")
  ) {
    return true;
  } else return false;
}

export default responseFunc;
