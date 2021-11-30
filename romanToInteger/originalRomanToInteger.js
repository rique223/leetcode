/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roman = s.toString().split("");
  let decimal = 0;

  const SPECIAL_CHARS = {
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
      continue;
    }

    if (rnumber === "I") {
      if (SPECIAL_CHARS.ICHARS[roman[index + 1]]) {
        decimal += SPECIAL_CHARS.ICHARS[roman[index + 1]] - 1;
        roman[index + 1] = 0;
      } else {
        decimal++;
      }
    }

    if (rnumber === "V") {
      decimal += 5;
    }

    if (rnumber === "X") {
      if (SPECIAL_CHARS.XCHARS[roman[index + 1]]) {
        decimal += SPECIAL_CHARS.XCHARS[roman[index + 1]] - 10;
        roman[index + 1] = 0;
      } else {
        decimal += 10;
      }
    }

    if (rnumber === "L") {
      decimal += 50;
    }

    if (rnumber === "C") {
      if (SPECIAL_CHARS.CCHARS[roman[index + 1]]) {
        decimal += SPECIAL_CHARS.CCHARS[roman[index + 1]] - 100;
        roman[index + 1] = 0;
      } else {
        decimal += 100;
      }
    }

    if (rnumber === "D") {
      decimal += 500;
    }

    if (rnumber === "M") {
      decimal += 1000;
    }
  }

  return decimal;
};
