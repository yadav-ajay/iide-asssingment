// Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits. 

let sumDigits = (num) => { 
    var starting = 0;
    var sum = 0;
    var numString = num.toString(); 
    
    for (var i = starting; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;
}
console.log(sumDigits(153));