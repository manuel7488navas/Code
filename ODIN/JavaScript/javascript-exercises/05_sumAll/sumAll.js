const sumAll = function sumar(a, b) {
    let total = "";
    if (a<0 || b<0){
        return 'ERROR';
    }else if ( typeof(a) !== "number" || typeof(b) !== "number" ){
        return 'ERROR';
    }else if (a<b){
       for (let i = a; i<=b; i++){
               total += i;

               for (let j = a; j<=total.length;j++){
                   total = j++;
               }  
    
           }
           return total;   
    }else if (a>b){
        for (let i = a; i>=b; i--){
            total += i;
            for (let j = a; j>=total.length;j++){
                total = j++;
            }
        }
        return total;
    }
}


          

// Do not edit below this line
module.exports = sumAll;
