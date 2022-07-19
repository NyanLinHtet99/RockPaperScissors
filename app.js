const array = ['ROCK','PAPER','SCISSORS']
const body = document.querySelector('body');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const start = document.getElementById('start');
const startDiv = document.querySelector('.start');
const playerScoreboard = document.querySelector('#player>p');
const computerScoreboard = document.querySelector('#computer>p');
const roundCounter = document.querySelector('h3');
let playerScore=0;
let computerScore = 0;
let round = 0;
let result = document.createElement('p');
body.appendChild(result);
function computerChoose(){
     return randomNumber(0,2);
}
function game(){
    playerScore=0;
    playerScoreboard.textContent = '0';
    computerScoreboard.textContent = '0';
    computerScore = 0;
    round = 0;
    rock.disabled =false;    
    paper.disabled =false;    
    scissors.disabled =false;
    startDiv.removeChild(start);
    result.textContent = '';
    roundCounter.textContent = '';
    
}
function play(){
    let player = this.textContent;
    let computer = computerChoose();
    let score = playRound(player,computer);

    if(score>0){
        playerScore += score;
        playerScoreboard.textContent = playerScore.toString();
        this.classList.add("win")
    }
    else if(score<0) {
        computerScore += -score;
        computerScoreboard.textContent = computerScore.toString();
        this.classList.add("lose")
    }
    else{
        this.classList.add("draw")
    }
    round++;
    roundCounter.textContent = `Round ${round}`;
    if(Math.abs(playerScore - computerScore) >= 3 || round == 5) {
        startDiv.appendChild(start);
        rock.disabled =true;    
        paper.disabled =true;    
        scissors.disabled =true;
        rock.removeAttribute('class');
        paper.removeAttribute('class');
        scissors.removeAttribute('class');
        if(playerScore>computerScore){
            result.textContent = "You win";
        }
        else if(playerScore<computerScore){
            result.textContent = 'You lose';
        }
        else{
            result.textContent = 'Draw';
        }
    }
}
start.addEventListener('click',game);
rock.addEventListener('click',play);
paper.addEventListener('click',play);
scissors.addEventListener('click',play);
rock.disabled =true;    
paper.disabled =true;    
scissors.disabled =true;
const buttons = document.querySelectorAll('.button>button');
buttons.forEach((button)=>{
    button.addEventListener('transitionend',(e)=>{
        if(e.propertyName !== 'transform') return;
        e.target.removeAttribute('class');
    })
})

function randomNumber(min,max){
    return Math.round((Math.random()*(max-min)))+min;
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