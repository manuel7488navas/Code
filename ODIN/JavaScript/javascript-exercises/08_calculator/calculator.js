const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let total = 0;
 for (let i=0;i<arr.length;i++){
    total += arr[i]; 
}
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i=0;i<arr.length;i++){
     total *= arr[i]; 
 }
   return total;
};

const power = function(num,exp) {
	return Math.pow(num,exp);
};

const factorial = function(num) {
  if (num == 0){
    return 1;
  } else if (num == 1){
    return 1;
  }else{
    return (num * factorial(num - 1));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
