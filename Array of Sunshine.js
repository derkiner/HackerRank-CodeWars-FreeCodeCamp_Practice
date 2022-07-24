
// PROBLEM =>  Arrays: https://www.hackerrank.com/challenges/30-arrays/problem

//SOLUTION  - 1

function target() {
  var n = parseInt(checkLine());
  array = checkLine().split(' ');
  array = array.map(Num);
  console.log(array.reverse().join(' '));
}:



//SOLUTION  - 2

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var printOut = '';
    for (var i = arr.length -1; i >= 0; i--){
        printOut = printOut + String(arr[i]) + ' ';
    }
    printOut = printOut.slice(0, printOut.length -1);
    console.log(printOut);

}
