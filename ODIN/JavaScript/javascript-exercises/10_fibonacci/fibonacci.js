const fibonacci = function fibo(num) {
    if (num<0){
        return "OOPS";
    }else if(num == 0){
        return 0;
      } else if (num == 1){
        return 1;
      }else{
        return (fibo(num - 1)+fibo(num - 2));
      }
};

// Do not edit below this line
module.exports = fibonacci;
