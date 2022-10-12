const prompt = require('prompt-sync')();
function checkPalindrome(n){
    let sum=0;
    let temp=n;    
    while(n>0){    
        r=n%10;  //getting remainder  
        sum=(sum*10)+r;    
        n=Math.floor(n/10);    
    }
    if(temp==sum)    
    console.log("palindrome number ");    
    else    
    console.log("not palindrome");
}
console.log("Enter two numbers to check whether they are palindrome or not")
let num1 = parseInt(prompt("Enter number 1"));
checkPalindrome(num1);
let num2 =  parseInt(prompt("Enter number 2"));
checkPalindrome(num2);