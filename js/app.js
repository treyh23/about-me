'use strict';

var correctGuesses = 0;


function sectionOne(){
  var questionOne = prompt('is my hair color blue? Respond with Y or N').toUpperCase();
  if(questionOne === 'Y' ) {
    alert('That is unfortunately not true');
  } else if (questionOne === 'N'){
    alert('You are correct :)');
    correctGuesses++;
  } else {
    alert('you were suppose to answer using Y or N');
  }
  console.log('the users answer is ' + questionOne);
}
sectionOne();

function sectionTwo(){
  var questionTwo = prompt('is pizza my favorite italian food? - Remember, use Y or N for your answers').toUpperCase();

  if(questionTwo === 'Y') {
    alert('You are correct! Pizza is my favorite Italian food');
    correctGuesses++;
  } else if (questionTwo === 'N') {
    alert('Unfortunate guess - Pizza is my favorite Italian food');
  } else {
    alert('You entered the wrong answer! Try again');
  }
  console.log(questionTwo + ' is his favorite Italian food!');
}
sectionTwo();

var questionThree = prompt('is my name Forrest? - Also, use Y or N for your answer').toUpperCase();

if(questionThree === 'Y') {
  alert('You are correct! & It\'s spelled like Forrest Gump');
  correctGuesses++;
} else if (questionThree === 'N') {
  alert('Wrong answer :(');
} else {
  alert('did you enter the right type of answer??');
}

console.log('the gentleman that wrote this program, his name is ' + questionThree);

var questionFour = prompt('Were you born in Florida? - Remember, answer using Y or N').toLocaleUpperCase();

if(questionFour === 'Y') {
  alert('You are incorrect');
} else if (questionFour === 'N') {
  alert('You are right! I was born in Philadelphia');
  correctGuesses++;
} else {
  alert('You didnt answer in the right format :/');
};
console.log('Yes, he was born in ' + questionFour);

var questionFive = prompt('Do you like entrepreneurship? - Remember, use Y or N to answer').toUpperCase();

if(questionFive === 'Y') {
  alert('Yes, I don\'t just like entrepreneurship, i\'m nerdy and obssesed with it.');
  correctGuesses++;
} else if (questionFive === 'N') {
  alert('oh whoa, you need to get to know me some more. This is the wrong answer');
} else {
  alert('did you write your answer in the right format?');
};
console.log('If you couldn\'t tell ' + questionFive + ' he does like entrepreneurship');

var careerLength = 7;

var lengthGuess;
for(var i = 0; i < 4; i++) {

  lengthGuess = prompt('Can you guess how many month\'s i\'ve owned and operated Contempo.io?');

  lengthGuess = parseInt(lengthGuess);

  if(lengthGuess < careerLength) {
    alert('I\'m sorry, That guess was too low. Try again');
  } else if(lengthGuess > careerLength) {
    alert('I\'m sorry, that guess was too high');
  } else if (lengthGuess === careerLength){
    alert('you answered correctly!');
    correctGuesses++;
    break;
  } else {
    alert('please enter a number and no words');
  }
}

var totalGuess = 0;
var livedIn = ['washington', 'florida', 'pennsylvania'];
var flag = false;

while(totalGuess < 6 && flag === false)  {
  var userGuess = prompt('Can you guess a state i\'ve lived in besides Washington?').toLowerCase();
  totalGuess++;
  for(var i = 0; i < livedIn.length; i++) {
    if(userGuess === livedIn[i] ) {
      alert('You Guessed Correctly');
      correctGuesses++;
      flag = true;
    }
  }
  if(flag === false) {
    alert('You have used up ' + totalGuess + ' out of 6 guesses');
  }
}
alert('thank you for playing our game! You got ' + correctGuesses + ' questions correct out of 7');