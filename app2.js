var questions = ['Does Aziza have a nickName?' , 'Does Aziza have kids?',
'Does Aziza have a Computer?', 'Does Aziza live in Seattle?', 'Does Aziza have a pink shoes?',
];
var correctAns = [ 'yes', 'yes','yes','no','yes'];
var correctAns1 = ['y','y','y','n','y'];
var response = [['Right! aziza has a nickName which is zozo', 'Wrong, Aziza actually does have a nickName which is zozo.'],
['Right! Aziza has two kids','Wrong, Aziza does have 2 kids'],
['Right! Aziza has a computer', 'Wrong! Aziza does have a computer'],
['Right! Aziza Lives in lynnwood','Wrong! Aziza Lives in lynnwood'],
['Right! Aziza has a pink shoes','Wrong! Aziza Does have a pink shoes']];
var rightAnswer = 0;
var userName = prompt('Greetings!!! what is your name??');
alert('Welcome ' + userName + ', glad you\'re here!');
for (var i = 0; i < questions.length ; i++) {
  var answer = prompt(questions[i]).toLowerCase();
  if (answer === correctAns[i] || answer === correctAns1[i]) {
    rightAnswer ++;
    alert(response[i][0] + ', ' + userName);
  }
  else{
    alert(response[i][1] + ', ' + userName);
  }
}
//Day3 Question6
var number = parseInt(prompt('Guess a number?'));
var i = 1;
while( i !== 4 && number !== 5) {
  if(number > 5){
    alert('Too high');
  }else{
    alert('too low');
  }
  i++;
  number = parseInt(prompt('Guess a number?'));
}
if(number === 5) {
  alert('Good Job you Got it!');
  rightAnswer ++;
}
else
  alert('Sorry you have reached 4 times');
//Day3 Question7
var countries = ['QATAR', 'EGYPT', 'LIBYA'];
var m = 0;
while(m < 5){
  var country = prompt('Can you guess a country that I have lived in besides USA?').toUpperCase();
  for( var k = 0 ; k < countries.length ; k++) {
    if(country === countries[k]) {
      alert('You got it! I have lived in ' + countries);
      rightAnswer ++;
      m = 7;
    }
  }
  m ++;
}
if( m === 5){
  alert('I am sorry! You have reched 6 times! I have lived in ' + countries);
}
alert('You got ' + rightAnswer + ' out of 7 questions correct,  ' + userName + ' Better luck next time.');
