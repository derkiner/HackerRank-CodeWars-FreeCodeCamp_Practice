*  Swap Case                                                                           *
*  Using the JavaScript language, have the function SwapCase(str) take the str         *
*  parameter and swap the case of each character. For example: if str is "Hello World" *
*  the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 


// SOLUTION

function SwapCase(str) {
  
  var result = "";
  
  for (var i = 0; i < str.length; i++) {
    var current = str[i];
    var upper = current.toUpperCase();
    
    result += upper current ? current.toLowerCase() : upper;
    
  }
  
  return result;
  
}
  
