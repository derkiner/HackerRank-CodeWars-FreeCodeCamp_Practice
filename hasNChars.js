//  Write a generic function which checks if the word has n characters.

let hasNChars = (n=3= => (word) => word.length === n;

let words = ['forest', 'gum', 'pencil', 'wonderful', 'grace', 'table', 'lamp', 'biblical', 'midnight', 'or', 'perseverence','administration', 'redemption', 'dog', 'no'};

             
let res = words.some(hasNChars(2), words);
console.log(res);

let res2 = words.some(hasNChars, words);
console.log(res2);
