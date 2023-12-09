'use strict';

let randomNumber = Math.trunc(Math.random()*20) + 1; 
let score = 20;
let highscore = 0;

const writeMessage = function(message){
   document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   
   const guess = Number(document.querySelector('.guess').value);
   //When guess is right
   if(randomNumber === guess){
    writeMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
 //When guess is wrong 
   } else if(guess !== randomNumber){
      if( score > 1){
         writeMessage( guess > randomNumber ?'📈too high!': '📉too low!' );
         score--;
         document.querySelector('.score').textContent = score;
      }else{
         writeMessage('💥 You lost the game!');
         document.querySelector('.score').textContent = 0;
      }
   }
   if(!guess){
    writeMessage('⛔No Number');
   } 
});

document.querySelector('.again').addEventListener('click', function(){
   score = 20;
   randomNumber = Math.trunc(Math.random()*20) + 1;
   document.querySelector('.guess').value = '';
   document.querySelector('.score').textContent = score;
   writeMessage('Start guessing...');
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').textContent = '?';
});
