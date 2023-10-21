
//displays value
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


//clear display
function clearDisplay() {
    document.getElementById('display').value = "";
}

//checks and evaulate given expression; has error alert

function evaluateExpression() {
    let expression = document.getElementById('display').value;

    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert("Error: Invalid Expression");
        clearDisplay();
    }
}


//array click sound effects 

var clickSounds = ["click0.mp3", "click1.mp3", "click2.mp3", "click3.mp3", "click4.mp3"]; 


//click effects are randomized

function playRandomClickSound() {
    var randomIndex = Math.floor(Math.random() * clickSounds.length);
    var randomSound = clickSounds[randomIndex];
    var audio = new Audio(randomSound);
    audio.playbackRate = 4;
    audio.play();
  }


  //all buttons have sound effects that are random now
  
  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      playRandomClickSound();
    });
  });