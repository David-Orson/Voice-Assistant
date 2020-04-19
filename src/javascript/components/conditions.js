function responseFunc(message, speech) {
    if (message.includes("how are you")) {
        const response = "good";
        speech.text = response;
    }
    else {
        speech.text = "I don't know what you said";
    }
}
export default responseFunc;
