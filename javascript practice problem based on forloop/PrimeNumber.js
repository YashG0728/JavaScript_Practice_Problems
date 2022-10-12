const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the Integer "));
function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0||i<=1){
            return 1
        }
    }
    return 0;
}
let checker = checkPrime(n)
if(checker==0){
    console.log("Number is prime")
}else{
    console.log("Number is not prime")
}