'use strict';

var questionOne = prompt('is my hair color blue? \nRes Y or N').toUpperCase;

if(questionOne === 'Y' ) {
    alert('That is unfortunately not true')
} else if (questionOne === "N"){
    alert('You are correct :)');    
} else {
    alert('you were suppose to answer using Y or N');;
}
console.log('the users answer is ' + questionOne);

var questionTwo = prompt('is pizza my favorite italian food? - Remember, use Y or N for your answers').toUpperCase;

if(questionTwo === 'Y') {
    alert('You are correct! Pizza is my favorite Italian food')
} else if (questionTwo == 'N') {
    alert('Unfortunate guess - Pizza is my favorite Italian food')
} else {
    alert('You entered the wrong answer! Try again');
}

console.log(questionTwo + ' is his favorite Italian food!')
