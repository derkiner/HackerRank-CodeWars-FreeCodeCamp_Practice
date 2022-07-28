// Problem => https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let flag = 0;
  let resultArr= arr[1].toLowerCase().split("").filter(x=>arr[0].toLowerCase().indexOf(x)<0?false:true);
  
  return resultArr.Length === arr[1].length;
}

