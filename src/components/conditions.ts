import { mood1 /* mood10, moodLess10 */ } from "./mood.js";
import { moodLevels } from "../app.js";

function responseFunc(message: any, speech: any) {
  if (message.includes("how are you")) {
    const response: any = "good";
    speech.text = response;
    mood1();
  } else {
    speech.text = "I don't know what you said";
  }
}

export default responseFunc;
