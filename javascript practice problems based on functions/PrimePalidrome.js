const prompt = require('prompt-sync')();
function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0||i<=1){
            return 1
        }
    }
    return 0;
}
function palindrome(n){
    let sum=0;
    let temp=n;    
    while(n>0){    
        r=n%10;  //getting remainder  
        sum=(sum*10)+r;    
        n=Math.floor(n/10);    
    }
    return temp;
}
console.log("Enter number to check Prime and if prime then check whether its plaindrome is prime")
let num1 = parseInt(prompt("Enter number"));
let checker = checkPrime(num1);
if(checker==0){
    console.log("Number is prime")
    palindromOfPrime = palindrome(num1);
    if(checkPrime(palindromOfPrime)==0){
        console.log("Palindrome of prime is prime")
    }else{
        console.log("Number is not prime")
    }
}else{
    console.log("Number is not prime")
}