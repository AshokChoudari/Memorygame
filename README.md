# Memorygame
Memory Game implemented using HTML, CSS, and JavaScript. 

OVERVIEW:
The Memory Game involves a grid of cards with hidden colors, and the objective is to match pairs of identical colors by flipping the cards.

Here's a brief overview of the key components and functionality in project:

HTML Structure:

The HTML file defines the structure of the game, including a header, a main section with a "Start the Game" button, and an empty div with the ID "main" where the game board and messages will be dynamically generated.

JavaScript Logic:

The JavaScript file (MemoryGame.js) contains the game logic.
The game initializes with an array (cells) representing the grid of cards and an array (colors) containing the possible colors for the cards.
An empty array (arr) is used to keep track of the indices of the cards that have been assigned colors.

Game Initialization:

The startGame function is triggered when the "Start the Game" button is clicked. It clears the main section and calls the createBoard function.
Creating the Game Board:

The createBoard function sets up the initial game board, including a score display.
It dynamically creates a grid of hidden cards using the cells array.

Assigning Colors:

The giveColors function assigns colors to the cards randomly from the colors array. Each color is assigned to two cards, forming pairs.
Gameplay:

The showColor function handles the logic when a card is clicked. It reveals the color of the clicked card and checks for matches.
If two cards match, they are marked as "done." If not, there is a brief delay before hiding the cards again.

Game Over:

The checkGameOver function monitors the state of the game. When all pairs are matched, a game over message is displayed with the number of moves made and the minimum moves achieved.

Play Again:

The playAgain function resets the game when the "Play Again" button is clicked. It clears the main section, initializes the game, and resets the necessary variables.

CSS Styling:

The CSS file (MemoryGame.css) provides basic styling for the game, including colors, dimensions, and visual effects.

Overall, Memory Game is a classic implementation where players aim to match pairs of cards while keeping track of the number of moves made. It includes features like dynamic board creation, randomized color assignment, and a game over message. The project demonstrates basic interactivity and logic using HTML, CSS, and JavaScript.
