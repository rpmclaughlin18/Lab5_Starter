
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);
var voices = document.getElementById("horn-select");
var sound = document.getElementsByClassName("hidden");
var button = document.getElementsByTagName("button");
var slider = document.getElementById("volume");
var myVolume = slider.value;
function init() {
  voices.addEventListener('change', somethingSelected);
  button[0].addEventListener('click', playSound);
  slider.addEventListener('change', volumeChange);
}

function volumeChange() {
  myVolume = slider.value;
  if (myVolume == 0) {
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "Volume level 2") {
        img[i].src = "assets/icons/volume-level-0.svg"
      }
    }
  }
  else if(myVolume < 33){
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "Volume level 2") {
        img[i].src = "assets/icons/volume-level-1.svg"
      }
    }
  }
  else if(myVolume < 67){
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "Volume level 2") {
        img[i].src = "assets/icons/volume-level-2.svg"
      }
    }
  }
  else {
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "Volume level 2") {
        img[i].src = "assets/icons/volume-level-3.svg"
      }
    }
  }
}

function somethingSelected() {
  if(voices.options[voices.selectedIndex].text == "Party Horn"){
    partyHornSelected();
  }
  else if(voices.options[voices.selectedIndex].text == "Car Horn"){
    carHornSelected();
  }
  else if(voices.options[voices.selectedIndex].text == "Air Horn"){
    airHornSelected();
  }
}

function partyHornSelected() {
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "No image selected") {
        img[i].src = "assets/images/party-horn.svg"
      }
    }
    console.log(sound);
    sound.src = "assets/audio/party-horn.mp3";
}

function carHornSelected() {
  var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "No image selected") {
        img[i].src = "assets/images/car-horn.svg"
      }
    }

    sound.src = "assets/audio/car-horn.mp3";
}

function airHornSelected() {
  var img = document.images;
    for (var i = 0; i < img.length; i++) {
      if(img[i].alt == "No image selected") {
        img[i].src = "assets/images/air-horn.svg"
      }
    }

    sound.src = "assets/audio/air-horn.mp3";
}

function playSound() {
  var audio = new Audio(sound.src);
  audio.volume = myVolume/100;
  audio.play();
  if(sound.src == "assets/audio/party-horn.mp3") {
    jsConfetti.addConfetti();
  }
}