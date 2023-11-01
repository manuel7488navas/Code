const palindromes = function (str) {
    let str2 = "";
    let str3 ="";
    let str4 ="";
        
    for (let i = str.length-1; i>=0;i--){
        str2 += str[i];
        str3 = str2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s0-9]+/g, '').toLowerCase();
        str4 = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s0-9]+/g, '').toLowerCase();
    }
 
    if (str3 === str4){
        return  true;
    }
        return false;
    }


// Do not edit below this line
module.exports = palindromes;
