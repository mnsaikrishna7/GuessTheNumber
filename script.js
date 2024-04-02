'use strict'

//generate random secret number between 1 to 20
let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20; // set initial score to 20
let highestScore=0; // set initial highest score to 0


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number (document.querySelector('.guess').value);

    //if no guess
    if(!guess){
       document.querySelector('.message').textContent='⛔ No Number';
    
    }
    //if guess is higher than the actual secret number
    else if(guess>secretNumber){
        score--;
        document.querySelector('.message').textContent='📈 Too High ';
        document.querySelector('.score').textContent = score;
        
    }

    // if the guess is lower than the actual secret number
    else if(guess<secretNumber){
        score--;
        document.querySelector('.message').textContent='📉 Too Low';
        document.querySelector('.score').textContent = score;
    }

    //if the guess is corret
    else if(guess === secretNumber){
        document.querySelector('.message').textContent='🎉 Correct Number !';
        document.querySelector('.number').textContent=secretNumber;
        if(highestScore <= score){
        highestScore=score;
        }
        document.querySelector('.highscore').textContent = highestScore;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        
    }

    if(score === 0){
        document.querySelector('.message').textContent='☹️ YOU LOST THE GAME !';  
        document.querySelector('.check').setAttribute("disabled","");
    }

})

//this function resets values to initial game value, when you click on Again! button
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    highestScore=highestScore;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value='';
    document.querySelector('.highscore').textContent=highestScore;
    document.querySelector('.number').textContent='?';
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.check').disabled=false;

})





