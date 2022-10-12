let walletBalance = 100;
let numberOfBet = 0;
let betWon = 0;
let LOSE = 0;
let WIN = 1;
while(true){
    let toss = Math.floor(Math.random()*10 %2);
    numberOfBet++;
    switch(toss){
        case WIN:
            walletBalance++;
            betWon++;
            break;
        case LOSE:
            walletBalance--;
            break;
    }
    if(walletBalance==0||walletBalance==200){
        console.log("Wallet Balance :"+walletBalance+" Bet Won :"+betWon+" Number of bet: "+numberOfBet);
        break;
    }
}