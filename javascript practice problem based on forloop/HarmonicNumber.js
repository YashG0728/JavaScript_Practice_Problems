const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number of n to get its Harmonic sum "));
function factorial(n){
    let factorial = 1.00;
    for(let i=2;i<=n;i++){
        factorial = factorial + factorial/i;
    }
    return factorial;
}
console.log("Harmonic value of "+n+" is "+factorial(n))