'use strict';

var userName = prompt('Greetings!!! what is your name>');
alert('Welcome ' + userName + ', glad you\'re here!');
var answer1 = prompt('Does Sam have 3 cats?').toLowerCase();
if(answer1 === 'yes' || answer1 === 'y'){
  alert('Right! sam has felines named Buddy, Alistair, and Trillian');
}else {
  alert('Wrong, Sam actually does have 3 cats. Weird dude.');
}
var answer2 = prompt('Does Aziza has kids?').toLowerCase();
if(answer2 === 'yes' || answer2 === 'y')
{
  alert('Right! Aziza has two kids');
}else{
  alert('Wrong Aziza does have 2 kids');
}
var answer3 = prompt('Does Aziza like Dancing').toLowerCase();
if(answer3 === 'yes' || answer3 === 'y')
{
  alert('Right! Aziza loves dancing');
}else{
  alert('Wrong! Aziza does like to dancing');
}
var answer4 = prompt('Does Aziza live in Seattle').toLowerCase();
if(answer4 === 'yes' || answer4 === 'y'){
  alert('Wrong! Aziza Lives in lynnwood');
}else {
  alert('Right! Aziza Lives in lynnwood');
}
answer5 = prompt('Does Aziza have a pink shoes').toLowerCase();
if(answer5 === 'yes' || answer5 === 'y'){
  alert('Right! Aziza has a pink shoes');
}else {
  alert('Wrong! Aziza Does have a pink shoes');
}
