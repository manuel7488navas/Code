const repeatString = function(string, number) {
  if (number < 0){
    return 'ERROR';
  }
  let string2 = "";
  for (let i = 0; i < number; i++){
    string2 += string;
  }
    return string2;
};

// Do not edit below this line
module.exports = repeatString;

