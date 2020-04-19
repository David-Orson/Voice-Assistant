export function setup() {
  function setVoice() {
    const voices = window.speechSynthesis.getVoices();
  }

  setVoice();
}

export function voiceSetup(speech: any, voices: any) {
  voices = window.speechSynthesis.getVoices();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 2;

  speech.voice = voices[2];
  console.log(voices);
}
