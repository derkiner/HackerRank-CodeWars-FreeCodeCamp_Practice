// Problem => https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

var factorV={
  "1":{numeric:1,roman: 'I'},
  "2":{numeric:4,roman: 'IV'},
  "3":{numeric:5,roman: 'V'},
  "4":{numeric:9,roman: 'IX'},
  "5":{numeric:10,roman: 'X'},
  "6":{numeric:40,roman: 'XL'},
  "7":{numeric:50,roman: 'L'},
  "8":{numeric:90,roman: 'XC'},
  "9":{numeric:100,roman: 'C'},
  "10":{numeric:400,roman: 'CD'},
  "11":{numeric:500,roman: 'D'},
  "12":{numeric:900,roman: 'CM'},
  "13":{numeric:1000,roman: 'M'},
};

function convert(num) {
  let result = "";
  for (let i = 13; i>0;i--) {
    while (factorV[i]["numeric"] <= num) {
      result += factorV[i]["roman"];
      num -= factorV[i]["numeric];
                        }
  }return result;
}
