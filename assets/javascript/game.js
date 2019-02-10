// Variable - set game state object:

var state = {
  // target number as a randomly generated value between 19-180
  targetNumber: Math.floor(Math.random() * (180-19)) + 20,
  // intial win value
  winNumber: 0,
  // initial lose value
  loseNumber: 0,
  // initial counter value
  counter: 0,
  // number options as four randomly selected value between 1-12
  numberOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  // actual four number options
  newNumberOptions: [],
};

// checkpoint: targetNumber
// console.log(state.targetNumber);

// Link values to HTML element (to be put in logical operators):
$("#number-to-guess").text(state.targetNumber);
$("#win-count").text(state.winNumber);
$("#lose-count").text(state.loseNumber);
$("#total-score").text(state.counter);

// Function - choosing four unique numbers as actual number options
// Use a recursive function outside of For Loop to avoid repeated numbers
// (courtesy of TA-Pete)

function setNumbersForButtons(){
  for (var i = 0; i < 4; i++) {
    var pickedNumbers = 1 + Math.floor(Math.random() * state.numberOptions.length);
    if(state.newNumberOptions.includes(pickedNumbers)){
      recursiveButtons();
    }
    else {  
      state.newNumberOptions.push(pickedNumbers);
    }
  }
}

setNumbersForButtons();
// checkpoint: all four numbers are unique!
// console.log(state.newNumberOptions);

function recursiveButtons(){
  var newNum = 1 + Math.floor(Math.random() * state.numberOptions.length);
  if(state.newNumberOptions.includes(newNum)){
    recursiveButtons();
  }
  else {
    state.newNumberOptions.push(newNum);
  }
}

// For Loop - append crystals with class and image attribute:
for (var i = 0; i < state.newNumberOptions.length; i++) {

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.addClass("crystal-image-"+i);
  imageCrystal.attr("src", "./assets/images/g" + i + ".png");
  imageCrystal.attr("data-crystalvalue", state.newNumberOptions[i]);
  $("#crystals").append(imageCrystal);
  }

// Function - append crystals with new option numbers:
// (courtesy of Henry-Classmate)
function changeCrystals(){
  for (var i = 0; i < state.newNumberOptions.length; i++) {
    var imageCrystal = $(".crystal-image-"+i);
    imageCrystal.attr("data-crystalvalue", state.newNumberOptions[i]);
    $("#crystals").append(imageCrystal);
    }
  }

// Function - game complete reload:
function reloadPage() {
  location.reload();
}

// Function - game round reload:
function setNewState() {
  state.counter = 0;
  $("#total-score").text(0);
  state.newNumberOptions = [];
  state.targetNumber = Math.floor(Math.random() * (180-19)) + 20;
  console.log("state: ", state, state.targetNumber, state.newNumberOptions);
  $("#number-to-guess").text(state.targetNumber);
}


// checkpoint: new target number and new number options:
// setNewState();
// console.log(state.targetNumber);
// console.log(state.newNumberOptions);

// ==============================================================================
// On-click event for every crystal
$(".crystal-image").on("click", function() {

  // Determine the crystal's value by extracting the value from data attribute
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // Every click, from every crystal adds to the global counter.
  state.counter += crystalValue;
  $("#total-score").text(state.counter);

  // Set win-lose logic
  if (state.counter === state.targetNumber) {
    state.winNumber += 1;
    $("#win-count").text(state.winNumber);
    setNewState();
    setNumbersForButtons();
    changeCrystals()

    if (state.winNumber > 2) {
      alert("YOU ARE PURE MAGIC! :)");
      alert("play again?");
      reloadPage();
    }
  }

  else if (state.counter >= state.targetNumber) {
    state.loseNumber += 1;
    $("#lose-count").text(state.loseNumber);
    setNewState();
    setNumbersForButtons();
    changeCrystals()
    
    if (state.loseNumber > 2) {
      alert("YOU ARE OUT!");
      alert("play again?");
      reloadPage();
    }
  }

});