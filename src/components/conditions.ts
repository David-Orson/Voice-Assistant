function responseFunc(message: any, speech: any) {
  if (message.includes("how are you")) {
    const response: any = "good";
    speech.text = response;
  } else {
    speech.text = "I don't know what you said";
  }
}

export default responseFunc;
