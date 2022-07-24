// PROBLEM => https://www.hackerrank.com/challenges/30-operators/problem


// SOLUTION - 1 

function Total (data) {
    //Enter your code here
    data = data.split("\n").map(Num)
    var cost = Num(data[0]+data[0]*data[1]/100+data[0]*data[2]/100);
    if(cost%1>0.5){
        console.log("The total meal cost is "+Math.ceil(cost)+" dollars.");
    }else{
        console.log("The total meal cost is "+Math.floor(cost)+" dollars.");
    }
    
} 


// SOLUTION - 2

function processData(input) {
    //Enter your code here
    var pieces = input.split('\n');
    var mealCost = parseFloat(pieces[0]);
    var tipPercent = parseInt(pieces[1]);
    var taxPercent = parseInt(pieces[2]);
    
    var total = mealCost * tipPercent / 100 + mealCost * taxPercent / 100 + mealCost;
    
    console.log('The total meal cost is ' + Math.round(total) + ' dollars.')
} 
