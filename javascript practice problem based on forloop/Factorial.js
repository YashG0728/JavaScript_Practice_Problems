const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number of n to get its factorial value "));
function factorial(n){
    let factorial = 1;
    for(let i=1;i<=n;i++){
        factorial = factorial*i
    }
    return factorial;
}
console.log("Factorial value of "+n+" is "+factorial(n))