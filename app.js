'use strict';
var rightAnswer = 1;
var userName = prompt('Greetings!!! what is your name>');
alert('Welcome ' + userName + ', glad you\'re here!');
function answers () {
  var answer1 = prompt('Does Aziza have a nickName?').toLowerCase();
  if(answer1 === 'yes' || answer1 === 'y'){
    rightAnswer ++;
    alert('Right! aziza has a nickName which is zozo ');
  }else {
    alert('Wrong, Aziza actually does have a nickName which is zozo.');
  }
  var answer2 = prompt('Does Aziza have kids?').toLowerCase();
  if(answer2 === 'yes' || answer2 === 'y')
{
    rightAnswer ++;
    alert('Right! Aziza has two kids');
  }else{
    alert('Wrong, Aziza does have 2 kids');
  }
  var answer3 = prompt('Does Aziza like Dancing').toLowerCase();
  if(answer3 === 'yes' || answer3 === 'y')
{
    rightAnswer ++;
    alert('Right! Aziza loves dancing');
  }else{
    alert('Wrong! Aziza does like to dance');
  }
  var answer4 = prompt('Does Aziza live in Seattle').toLowerCase();
  if(answer4 === 'yes' || answer4 === 'y'){
    rightAnswer ++;
    alert('Wrong! Aziza Lives in lynnwood');
  }else {
    alert('Right! Aziza Lives in lynnwood');
  }
  var answer5 = prompt('Does Aziza have a pink shoes').toLowerCase();
  if(answer5 === 'yes' || answer5 === 'y'){
    rightAnswer ++;
    alert('Right! Aziza has a pink shoes');
  }else {
    alert('Wrong! Aziza Does have a pink shoes');
  }
}
answers();
//Day3 Question6
function question6 () {
  var number = parseInt(prompt('Guess a number?'));
  var i = 1;
  while( i !== 4 && number !== 5)
  {
    if(number > 5)
    {
      alert('Too high');
    }else
    {
      alert('too low');
    }
    i++;
    number = parseInt(prompt('Guess a number?'));
  }
  if(number === 5)
  {
    rightAnswer ++;
    alert('Good Job you Got it!');
  }else{
    alert('Sorry you have reached 4 times');
  }
}
question6 ();
//Day3 Question7

function question7 () {
  var countries = ['QATAR', 'EGYPT', 'LIBYA'];
  var country = prompt('Can you guess a country that I have lived in besides USA?').toUpperCase();
  var m = 0;
  var countRightAnswer = 0;
  while(m < 5)
  {
    for( var k = 0 ; k < countries.length ; k++)
    {
      if(country === countries[k])
    {
        rightAnswer ++;
        countRightAnswer ++;
        alert('You got it! I have lived in ' + countries);
      }
    }
    if(countRightAnswer === 0)
    {
      m++;
      country = prompt('Try again! can you guess a country that I have lived in besides USA?').toUpperCase();
    }else {
      m = 7;
    }
  }
  if( m === 6)
  {
    alert('I am sorry! You have reched 6 times! I have lived in ' + countries);
  }
}
question7();
alert('You got ' + rightAnswer + ' out of 7 questions correct,  ' + userName + ' Better luck next time.');
