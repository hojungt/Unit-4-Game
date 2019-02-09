// NOTE TO SELF:
// 2. CHANGE ALL VAR TO STATE.OBJECT TO RESET GAME (REFER TO ASSIGNMENT 3)

// Set target number as a randomly generated value between 19-180:
var targetNumber = Math.floor(Math.random() * (180-19)) + 1;

// Set intial win and lose value:
var winNumber = 0;
var loseNumber = 0;

// Set counter value and number options to be four numbers between 1-12
var counter = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var newNumberOptions = [];

function setNumbersForButtons(){
  for (var i = 0; i < 4; i++) {
    var pickedNumbers = 1 + Math.floor(Math.random() * numberOptions.length);
    if(newNumberOptions.includes(pickedNumbers)){
      recursiveButtons();
    }
    else {  
      newNumberOptions.push(pickedNumbers);
    }
  }
}
setNumbersForButtons();
console.log (newNumberOptions);

// (TA - Pete) using a recursive function outside of For Loop to avoid repeated numbers
function recursiveButtons(){
  var newNum = 1 + Math.floor(Math.random() * numberOptions.length);
  if(newNumberOptions.includes(newNum)){
    recursiveButtons();
  }
  else {
    newNumberOptions.push(newNum);
  }
}

// link values to HTML element (to be put in logical operators):
$("#number-to-guess").text(targetNumber);
$("#win-count").text(winNumber);
$("#lose-count").text(loseNumber);
$("#total-score").text(counter);

// For Loop to append crystals with class and image attribute
for (var i = 0; i < newNumberOptions.length; i++) {

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "./assets/images/g" + i + ".png");

  // This data attribute will be set equal to the array value.
  imageCrystal.attr("data-crystalvalue", newNumberOptions[i]);
  $("#crystals").append(imageCrystal);
  }

// On-click event for every crystal
$(".crystal-image").on("click", function() {

  // Determine the crystal's value by extracting the value from data attribute
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;
  $("#total-score").text(counter);

  // Set win-lose logic
  if (counter === targetNumber) {
    alert("You win!");
    winNumber += 1;
    $("#win-count").text(winNumber);
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");``
    loseNumber += 1;
    $("#lose-count").text(loseNumber);
  }

});
