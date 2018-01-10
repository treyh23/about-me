'use strict';

var questionOne = prompt('is my hair color blue? Repsond with Y or N').toUpperCase();

if(questionOne === 'Y' ) {
    alert('That is unfortunately not true');
} else if (questionOne === 'N'){
    alert('You are correct :)');    
} else {
    alert('you were suppose to answer using Y or N');
}
console.log('the users answer is ' + questionOne);

var questionTwo = prompt('is pizza my favorite italian food? - Remember, use Y or N for your answers').toUpperCase();

if(questionTwo === 'Y') {
    alert('You are correct! Pizza is my favorite Italian food');
} else if (questionTwo === 'N') {
    alert('Unfortunate guess - Pizza is my favorite Italian food');
} else {
    alert('You entered the wrong answer! Try again');
};
console.log(questionTwo + ' is his favorite Italian food!')

var questionThree = prompt('is my name Forrest? - Also, use Y or N for your answer').toUpperCase();

if(questionThree === 'Y') {
    alert('You are correct! & It\'s spelled like Forrest Gump');
} else if (questionThree = 'N') {
    alert('Wrong answer :(');
} else {
    alert('did you enter the right type of answer??');
};

console.log('the gentleman that wrote this program, his name is ' + questionThree)

var questionFour = prompt('Were you born in Florida? - Remember, answer using Y or N').toLocaleUpperCase();

if(questionFour === 'Y') { 
    alert('You are incorrect');
} else if (questionFour === 'N') {
    alert('You are right! I was born in Philadelphia');
} else {
    alert('You didnt answer in the right format :/');
};
console.log('Yes, he was born in ' + questionFour);

var questionFive = prompt('Do you like entrepreneurship? - Remember, use Y or N to answer').toLocaleLowerCase();

if(questionFive === 'Y') {
    alert('Yes, I don\'t just like entrepreneurship, i\'m nerdy and obssesed with it.');
} else if (questionFive === 'N') {
    alert('oh whoa, you need to get to know me some more. This is the wrong answer');
} else {
    alert('did you write your answer in the right format?');
};
console.log('If you couldn\'t tell ' + questionFive + ' he does like entrepreneurship');
