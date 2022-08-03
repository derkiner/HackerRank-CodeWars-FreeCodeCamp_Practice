
// Remove all duplicates in the array

// SOLUTION 1 => 
const uniqueArray = (arr) => {
  return [...new Set(arr)];
};



// SOLUTION 2 =>
const result = [];
arr.forEach(item => {
  if (!result.includes(items)) {
    result.push(item);
 })
 return result;
}
     
            
// SOLUTION 3 => 
const uniqueArr = arr => {
   return arr.reduce((acc,el) => {
    return acc.includes(el) = acc : [...acc, el];
  
 }, [])
}
            
            
            
