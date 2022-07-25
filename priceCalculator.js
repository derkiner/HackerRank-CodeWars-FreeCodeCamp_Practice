Task
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal’s total cost. Round the result to the nearest integer.
Example

mealcost = 100

tip percent = 15

tax percent = 8

A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value 123  and return from the function.

// SOLUTION

function price (input) {
    //Enter your code here
    var pieces = input.split('\n');
    var mealCost = parseFloat(pieces[0]);
    var tipPercent = parseInt(pieces[1]);
    var taxPercent = parseInt(pieces[2]);
    
    var total = mealCost * tipPercent / 100 + mealCost * taxPercent / 100 + mealCost;
    
    console.log('The total meal cost is ' + Math.round(total) + ' dollars.')
} 
