import readline from "readline";

/**
 * @param {number} x
 * @return {boolean}
 */
// simple swap function
const swap = (numberArray, i, j) => {
  let temp; // temporary variable
  temp = numberArray[i]; // Take value from i index in numberArray and store it in temp
  numberArray[i] = numberArray[j]; // Take value from j index in numberArray and store, in the now "empty", i index of the numberArray
  numberArray[j] = temp; // Take value from temp variable and store it in the empty j index of the number array

  return numberArray;
};

// Humanized means that the function now takes inputs from the user and makes them readable by a human being in the console.
// The performance of this algorithm is not guaranteed because of the stdout functions in the code.
var isPalindrome = function (x) {
  let tempArray = x.toString().split(""); // Transform the input number in string and then separate all characters in the form of an array

  const correctedBitwiseLength =
    tempArray.length & 1 // Verify if it is even or odd. Even returns 0, odd returns 1.
      ? (tempArray.length / 2 + (tempArray.length / 2 < 0 ? 0 : 1)) >> 0 // If it is odd just do a bitwise math ceiling on the length of the array divided by two
      : ((tempArray.length / 2 + (tempArray.length / 2 < 0 ? 0 : 1)) >> 0) - 1; // If it is even do  the same bitwise math ceiling and subtract 1 because this bitwise adds 1 in case the number is an integer.

  for (let i = 0; i < correctedBitwiseLength; i++) {
    tempArray = swap(tempArray, i, tempArray.length - 1 - i);
  }

  return tempArray.join("") === x.toString()
    ? console.log(`${x.toString()} is a palindrome!`)
    : console.log(`${x.toString()} is not a palindrome!`); // join the reversed array back to a string and verify if it is the same as the input number parsed to a string;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("\nType a number to verify if it is a palindrome: \n", (number) => {
  isPalindrome(Number(number));
  rl.close();
});
