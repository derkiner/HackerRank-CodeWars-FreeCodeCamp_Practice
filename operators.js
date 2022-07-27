// PROBLEM => https://codingwithnick.in/hackerrank-day-2-operators-30-days-of-code-solution/


function processData(input) {
    //Enter your code here
    var pieces = input.split('\n');
    var mealCost = parseFloat(pieces[0]);
    var tipPercent = parseInt(pieces[1]);
    var taxPercent = parseInt(pieces[2]);
    
    var total = mealCost * tipPercent / 100 + mealCost * taxPercent / 100 + mealCost;
    
    console.log('The total meal cost is ' + Math.round(total) + ' dollars.')
} 
