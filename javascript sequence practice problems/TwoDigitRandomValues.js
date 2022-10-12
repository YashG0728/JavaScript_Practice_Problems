let min = 10;
let max = 99;
let a = Math.floor(Math.random()*(max-min+1)+min);
let b = Math.floor(Math.random()*(max-min+1)+min);
let c = Math.floor(Math.random()*(max-min+1)+min);
let d = Math.floor(Math.random()*(max-min+1)+min);
let e = Math.floor(Math.random()*(max-min+1)+min);
let sum = a + b + c + d + e;
let average = sum/5;
console.log("Addition : " + a +" + "+ b +" + "+  c +" + "+ d +" + "+ e +" = " + sum);
    
console.log("Average : "+ average);