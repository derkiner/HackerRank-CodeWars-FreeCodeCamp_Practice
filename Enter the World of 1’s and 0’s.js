
// Determine how many 1’s are in the binary representation of a base-10 number.

// PROBLEM => https://www.hackerrank.com/challenges/30-binary-numbers/problem



function main() {
    var n = parseInt(readLine()).toString(2);
    var splits = n.split('0');
    console.log(splits.map(function(elem){return elem.length;}).reduce(function(a,b){
        if (a>b) return a; else return b;}));

}
