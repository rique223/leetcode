# Verifier of palindrome numbers

[Link to this exercise in leetcode](https://leetcode.com/problems/palindrome-number/)  
A palindrome number is a number that reads the same from both directions, left to right and right to left. I've created this algorithm to verify if the number input by the user is a palindrome.
You can run the [Original code](originalIsPalindrome.js) if you want to have the same time as I did or, you can
run the [Humanized code](humanizedIsPalindrome.js) if you only want to see the algo running visually.

# How to run this code?

1. Make sure you have node installed(use node -v to be sure);
2. Clone the repository
3. CD into the folder of the exercise you want to see running;
4. Execute the choosen exercise with `node name_of_the_exercise.js`

# Method

First I wrote a solution using js functions that looked like this:

```
var isPalindrome = function(x) {
    return x === Number(x.toString().split('').reverse().join('')) ? true : false;
};
```

Albeit being small and elegant this solution is very abstract and heavy because of the use of the js functions and would only give me around a 59 to 70% top score in runtime, so I sailed in search of a lighter answer using bitwise, pointer logic and non abstract repetition loops:

For the calculation of the number of times the for loop should run so that the reverse is succesful I've used both bitwise implementation of Math.ceil and a bitwise implementation of even/odd number verification that looked like this:

Odd even verify

```
(tempArray.length & 1) // This will return 0 if the number is even and 1 if the number is odd
```

Bitwise ceil

```
tempArray.length/2 + (tempArray.length/2 < 0 ? 0 : 1) >> 0 // This will get the max index the algorithm should pass through for it to work(the length of the given number divided by two) and apply a bitwise ceiling on it.
// This ceil works by Adding 1 to the decimal number and right shifting the result by 0 with the bitwise >> operator which makes it turn into the last integer number. But there is a problem, if tempArray.length/2 turns out to be a integer this bitwise will add 1 to the number, thats why in the code it is veryfing if the length is even/odd so that it can subtract the wrong extra 1 in even numbers divided by 2.
```

I also used a very simple swap numbers sub routine:

```
const swap = (numberArray, i, j) => { // Receives the array and the indexes that should be swapped
    let temp;
    temp = numberArray[i]; // takes the value from the i index in the arr and store it in the temp variable
    numberArray[i] = numberArray[j]; // Takes the value from the j index in the arr and store it in the, now empty, i index of the arr;
    numberArray[j] = temp; // Takes the value from temp, that used to be the value from the i index, and store it in the j index of the arr, sucessfully swaping them.

    return numberArray;
}
```
