// Problem => https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers

let numString = "Your sandwich will be $5.00";
let noNumRegex =  /\D/g;
let result = numString.match(noNumRegex).length;
