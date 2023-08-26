# Rock Paper Scissors Game
This is a simple Rock Paper Scissors game implemented in HTML, CSS, and JavaScript. The game allows a user to play against the computer and keeps track of the scores until one of the players reaches a score of 5.

##Getting Started
To play the game, open the index.html file in a web browser.

## How to Play
Upon opening the game, you will see the title "Rock Paper Scissors Game" and two sections: "Player" and "Machine."
The player can choose their move (Rock, Paper, or Scissors) by clicking on the corresponding images.
After the player makes a choice, the computer will randomly select its move.
The game will display the selected moves and announce the result (win, lose, or draw) for that round.
The player's and machine's scores are displayed at the top of their respective sections. The first player to reach a score of 5 wins the game.
Once the game is over, a message will be displayed indicating the winner or if it was a draw. You can then choose to play again by clicking the "Do you wish to play again!" button.

## Files
index.html: This is the main HTML file that contains the structure of the game, including player and machine sections, game buttons, and the win/lose/draw container.

styles.css: This CSS file contains the styling for the game interface, including layout, colors, and animations.

script.js: This JavaScript file contains the game logic and functionality for playing rounds, displaying results, and updating scores.

## How the Code Works
The typeWriter function types out the game's title character by character.

The playSound function plays a sound effect when the "Start" button is clicked.

The game starts when the "Start" button is clicked. The gameButtons are assigned event listeners to play a sound when clicked.

The playRound function implements the game logic, where the player's and computer's moves are compared to determine the winner.

The machinePlay function randomly selects the computer's move.

The game function checks if either player or machine has reached a score of 5 and displays the winner accordingly.

## Attribution

The images used in the game are located in the Images folder.

## Credits
This game was created by Desire BIKORIMANA. Feel free to contact me at bikorimanadesire@yahoo.com for any questions or feedback.

Enjoy playing the game!

