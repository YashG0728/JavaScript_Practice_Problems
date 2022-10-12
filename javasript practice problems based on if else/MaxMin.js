var randomNumbers = [Math.floor(100 + Math.random() * 900),Math.floor(100 + Math.random() * 900),Math.floor(100 + Math.random() * 900),Math.floor(100 + Math.random() * 900),Math.floor(100 + Math.random() * 900)];
let max = randomNumbers[0];
let min = randomNumbers[0];
for(let i=0;i<randomNumbers.length;i++){
    console.log("NUmber"+(i+1)+" "+randomNumbers[i])
    if(max<randomNumbers[i]){
        max = randomNumbers[i]
    }
    if(min>randomNumbers[i]){
        min = randomNumbers[i]
    }   
}
console.log("Maximum number is "+max)
console.log("Minimum number is "+min)