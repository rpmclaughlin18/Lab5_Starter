// explore.js
window.addEventListener('DOMContentLoaded', init);
var voiceSelect = document.getElementById("voice-select");
var synth = window.speechSynthesis;
var voices;
var button = document.getElementsByTagName("button");
var img = document.images;

function init() {
  setTimeout(() => {
    voices = synth.getVoices();
    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }, 50);

  button[0].addEventListener('click', playSound);

  setInterval(() => {
    if(!synth.speaking)
      img[0].src = "assets/images/smiling.png"
  }, 1000)
}

function playSound() {
  var textBox = document.getElementById("text-to-speak");
  console.log(textBox.value);
  var utterThis = new SpeechSynthesisUtterance(textBox.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  console.log(selectedOption);
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  setTimeout(() => {
    if(synth.speaking){
      img[0].src = "assets/images/smiling-open.png"
    }
    
  }, 500)
  textBox.blur();
}