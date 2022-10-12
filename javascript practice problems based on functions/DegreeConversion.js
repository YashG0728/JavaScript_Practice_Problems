const prompt = require('prompt-sync')();
function findFahrenheit(degC){
    if(degC>=0||degC<=100){
        degF = (degC * (9/5)) +32
        console.log("Temperature in fahrenheit is : "+degF)
    }else{
        console.log("Enter a C in range of 0-100")
    }
}
function findCelsius(degF){   
    if(degF>=32||degF<=212){
        degC = (degF - 32) * (5/9)
        console.log("Temperature in Celsius is : "+degC)
    }else{
        console.log("Enter a F in range of 32-212")
    }
}
let t =true;
while(t){
    let choice = prompt("\t--Temperature Conversion-- \n1.Enter Temp in Celsius \n2.Enter Temp in fahrenheit\n3.Exit\n");
    if(choice==1){
        let degC = prompt("Enter Degree in Celsius");
        findFahrenheit(degC)
    }
    if(choice==2){
        let degF = prompt("Enter Degree in fahrenheit");
        findCelsius(degF)
    }
    if(choice==3){
        t = false;
    }
    if(choice!=1&&choice!=2&&choice!=3){
        console.log("Enter a Valid input")
    }
}