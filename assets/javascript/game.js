// Set target number as a randomly generated value between 19-180:
var targetNumber = Math.floor(Math.random() * (180-19)) + 1;
console.log (targetNumber);
$("#number-to-guess").text(targetNumber);

// Set initial value and number options to be four numbers between 1-12
// shuffle and avoid selecting same number twice? (see in-class exercise)
var counter = 0;
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var newNumberOptions = [];

for (var i = 0; i < 4; i++) {
  var pickedNumbers = 1 + Math.floor(Math.random() * numberOptions.length);
  newNumberOptions.push(pickedNumbers);
  console.log (pickedNumbers);
}

console.log (newNumberOptions);

// Set intial win and lose value:
var winNumber = 0;
var loseNumber = 0;
var totalScore = 0;

// link values to HTML element (to be put in logical operators):
$("win-count").text(winNumber);
$("lose-count").text(loseNumber);
$("total-score").text(totalScore);

// For Loop to append number options with class, image, and attribute
for (var i = 0; i < 4; i++) {

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
    }

// On-click event for every crystal
$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // Set win-lose logic
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
