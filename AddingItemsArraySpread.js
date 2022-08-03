// Write a function which get's an array and an element and returns a array with this element at the end

const numbers = [1,2];
const append = (arr, el) => {
  return [...arr,el];  
}
console.log(append([numbers],3));
