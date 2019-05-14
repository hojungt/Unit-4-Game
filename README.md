# __Crystal Collector__

__[Crystal Collector](https://hojungt.github.io/Unit-4-Game/)__ is a dynamic web game that commputes simple arithmetics on user choice to check if it matches the game's hidden number.

- __Game Rules:__
1. A hidden number between 19 and 180 is picked randomly by the app at start of the game.
2. Each of the four crystals holds a unique value between 1 and 12. By clicking on a crystal, you will add their corresponding values to your total number.
3. You win the round by matching your total number to the random number, and you lose the round if your total score goes above the random number.
4. After each round, the game will reset the value of each crystal and the hidden number.
5. Win a total of 3 rounds to win the game!

### Project Goal
To create a game app that runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript and JQuery code.

### Application Structure
The .js code stores a state object with a) an array of all possible crystal values and b) a function to randomly generate a target number. When the webpage is loaded, each crystal image is appended with a unique number from the value array, and a random target number is picked. 

Event-listener then picks up the image pressed by user and outputs total number in HTML. Referencing preset logical operators, the app checks whether if the total number is equal or greater than the random number, which also determines whether if the round completes with a win or a lose. 

The state object enables the game to continue after each round of win or lose. With a total of 3 wins / loses, the web app will alert user before resetting all game state.


### Resources
- Language
    - HTML
    - CSS
    - JavaScript
    - JQuery
- Other
    - [icons8](https://icons8.com/)

### Special Thanks
Jamal O'Garro, Michael Russo, Pete Tascio, and [Henry Chen](https://github.com/hchen651).

### Notes
This is part of an ongoing project. Comments and feedbacks are much appreciated.