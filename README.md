
# Max Slot Game

Max Slot Game is a web-based slot game built with React and TypeScript. It offers an engaging and entertaining slot gaming experience with its responsive design, visually appealing animations, and exciting gameplay.

## Features

- 3x3 Reel Responsive Slot Game: Play a thrilling 3x3 slot game with a modern and responsive user interface.

## game logic
1. Press the spin button.
2. The first reel starts spinning.
3. The first reel shows the spinning animation and a message.
4. The symbols are randomly shuffled, and the shuffled symbol array is set for the first reel.
5. Generate an outcome object with random odds, determine if the player wins (`playerWin`), and the index for a losing outcome (`losingOutcomeIndex`).
6. If the player wins (`playerWin` is true):
   - After a 1-second delay, set the winning combination as the symbol array for the first reel.
   - Set the winning line and payout for the first reel based on the values in the outcome object.
   - Stop the spinning of the first reel.
7. If the player loses (`playerWin` is false):
   - After a 1-second delay, set the symbol combination corresponding to the losing outcome index as the symbol array for the first reel.
   - Set the winning line and payout for the first reel based on the values of the losing outcome index.
   - Stop the spinning of the first reel.
8. Similarly, start the spinning of the second and third reels and set the symbol array, winning lines, and payouts based on the respective outcomes.
9. Once all reels have stopped spinning, enter the result display phase.
10. Calculate the total payout based on the winning lines and payouts of each reel.
11. Update the interface to display the total payout.
12. Reset the game to its initial state and wait for the next spin button press.
