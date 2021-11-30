import readline from "readline";

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = s.toString().split(""); // get the input string and turn it into an array
  let decimal = 0; // start the counter that will be the decimal output

  const SPECIAL_CHARS = {
    // auxiliary data structure that will be used to check the numbers that need subtraction
    ICHARS: {
      V: 5,
      X: 10,
    },
    XCHARS: {
      L: 50,
      C: 100,
    },
    CCHARS: {
      D: 500,
      M: 1000,
    },
  };

  for (let index = 0; index < roman.length; index++) {
    let rnumber = roman[index];

    if (rnumber === "0") {
      // If the number were previusly summed to the counter it will be zero, consenquently will ignore this iteration
      continue;
    }

    if (rnumber === "I") {
      // If its an I
      if (SPECIAL_CHARS.ICHARS[roman[index + 1]]) {
        // Verify if there is a V or X after the I
        decimal += SPECIAL_CHARS.ICHARS[roman[index + 1]] - 1; // If there is then return 5 or 10 minus 1
        roman[index + 1] = 0; // Mark the V or X as already added changing its value to 0
      } else {
        decimal++; // if there is no V nor X only add the 1 from the I
      }
    }

    if (rnumber === "V") {
      // If V alone add 5
      decimal += 5;
    }

    if (rnumber === "X") {
      // If its an X
      if (SPECIAL_CHARS.XCHARS[roman[index + 1]]) {
        // Verify if there is a L or C after the X
        decimal += SPECIAL_CHARS.XCHARS[roman[index + 1]] - 10; // If there is then return 50 or 100 minus 10
        roman[index + 1] = 0; // Mark the L or C as already added changing its value to 0
      } else {
        decimal += 10; // If threre is no L nor C only add the 10 from the X
      }
    }

    if (rnumber === "L") {
      // If L alone add 50
      decimal += 50;
    }

    if (rnumber === "C") {
      // If its a C
      if (SPECIAL_CHARS.CCHARS[roman[index + 1]]) {
        // Verify if there is a D or M after the C
        decimal += SPECIAL_CHARS.CCHARS[roman[index + 1]] - 100; // If there is then return 500 or 1000 minus 100
        roman[index + 1] = 0; // Mark the D or M as already added changing its value to 0
      } else {
        decimal += 100; // If there is no D nor M only add the 100 from the C
      }
    }

    if (rnumber === "D") {
      // If D alone add 500
      decimal += 500;
    }

    if (rnumber === "M") {
      // IF M alone add 1000
      decimal += 1000;
    }
  }

  return decimal;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "\nType a roman number to translate it to decimal: \n",
  (rnumber) => {
    console.log(romanToInt(rnumber.toUpperCase()));
    rl.close();
  }
);
