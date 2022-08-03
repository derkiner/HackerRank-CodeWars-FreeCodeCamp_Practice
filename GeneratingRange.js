
// Write a function which implement range


// SOLUTION 1 => 
const range = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i)
   }
  return result;
}

// SOLUTION 2 => 
const range = (start, end) => {
  return [...Array(end - start ).keys()].map(el => el + start)
}
