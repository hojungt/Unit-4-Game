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

// Link values to HTML element (to be put in logical operators):
$("#number-to-guess").text(state.targetNumber);
$("#win-count").text(state.winNumber);
$("#lose-count").text(state.loseNumber);
$("#total-score").text(state.counter);

// For Loop - append crystals with class and image attribute:
for (var i = 0; i < state.newNumberOptions.length; i++) {

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "./assets/images/g" + i + ".png");

  imageCrystal.attr("data-crystalvalue", state.newNumberOptions[i]);
  $("#crystals").append(imageCrystal);
  }

// Function - game complete reload:
function reloadPage() {
  location.reload();
}

// Function - game round reload:
function setNewState() {
  state.counter = 0;
  $("#total-score").text(0);
  state.newNumberOptions.length = 0;
  state.targetNumber = Math.floor(Math.random() * (180-19)) + 20;
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
    alert("You win!");
    state.winNumber += 1;
    $("#win-count").text(state.winNumber);
    setNewState();
    setNumbersForButtons();

  }

  else if (state.counter >= state.targetNumber) {
    alert("You lose!!");
    state.loseNumber += 1;
    $("#lose-count").text(state.loseNumber);
    setNewState();
    setNumbersForButtons();

  }

});
