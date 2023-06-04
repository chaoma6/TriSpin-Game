
# TriSpin-Game 

TriSpin Game is a mobile-friendly 3x3 reel slot game built with React and TypeScript. It offers an engaging and entertaining slot gaming experience with its responsive design, visually appealing animations, and exciting gameplay.

## Features

- **Outcome Generators:** Utilize outcome generators and utility functions such as shuffle and oddsGenerator to ensure a fair and entertaining gameplay experience.
- **Bet Picker Function:** Allow users to select different bet amounts through the Bet Picker function, enhancing the customization of the gameplay.
- **Credit Display Functionality:** Integrate credit display functionality to track the user's current credit balance.
- **Visually Appealing Animations:** Design visually appealing animations and styles using Framer Motion, enhancing the overall user experience.
- **Info Modal and Notifications:** Enhance the user experience by providing helpful messages and instructions throughout the game, including displaying winning combinations and the corresponding amounts won.

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

## Next Steps

1. Add additional paylines to increase the excitement and potential winning combinations.
2. Introduce bonus rounds or special symbols to provide extra gameplay features.
3. Implement sound effects and background music to enhance the immersive experience.
4. Include a leaderboard to track high scores and create a competitive element.
7. Add social sharing functionality to allow players to share their achievements with friends.
8. Conduct thorough testing and optimize the game for different devices and browsers.
