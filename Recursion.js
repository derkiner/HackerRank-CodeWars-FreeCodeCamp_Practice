

// PROBLEM => https://www.hackerrank.com/challenges/30-recursion/problem

function processData(input) {
 
    var N = parseInt(input),
        num = 1;
    
    function factorial(N){
        if (N > 1){
            num = num * N;
            factorial(N-1);
        }
    }
    factorial(N);
    console.log(num);
} 
