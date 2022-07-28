// Problem => https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

const repeatString = (str, num) => {
  if(num<=0)
    return "";
  return str+repeatString(str,num-1)
}
