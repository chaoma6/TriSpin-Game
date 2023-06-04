const shuffleArray = (array: string[]): string[] => {
  const newArray = [...array]; // Create a new array to avoid modifying the function parameter

  // Loop from the last item and swap each element with a randomly chosen element
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random number between 0 and i

    // Swap the current element with the element at the random position
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray; // Return the shuffled array
};

export default shuffleArray;
