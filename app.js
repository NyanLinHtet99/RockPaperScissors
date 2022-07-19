const array = ['ROCK','PAPER','SCISSORS']
function computerChoose(){
     return randomNumber(0,2);
}
function game(){
    let player ='';
    let playerScore=0;
    let computerScore = 0;
    for(let i=0;i<5;i++){
        do {
            player = prompt('Enter your choice','default').toUpperCase();
        }
        while(player !== 'ROCK' && player !=='PAPER' && player !=='SCISSORS');
        let computer = computerChoose();

        let score = playRound(player,computer);
        
        if(score>0) playerScore += score;
        if(score<0) computerScore += -score;
        if(Math.abs(playerScore - computerScore) >= 3) {
            break;
        }
    }
    if(playerScore>computerScore){
        console.log('win');
    }
    else if(playerScore<computerScore){
        console.log('lose');
    }
    else{
        console.log('draw');
    }
    
}

function randomNumber(min,max){
    return Math.random()*(max-min)+min;
}
function playRound(player,computerChoice){
    playerChoice = array.indexOf(player);
    switch(true){
        case playerChoice == computerChoice:
            return 0;
        case addNum(playerChoice,1) == computerChoice:
            return -1;
        case addNum(playerChoice,2) == computerChoice:
            return 1;
        default:
            break;
    }
}
function addNum(num,add){
    let ans = num + add;
    if(ans>2) ans = ans-3;
    return ans;
}