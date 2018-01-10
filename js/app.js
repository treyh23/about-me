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

var questionTwo = prompt('is pizza my favorite italian food?').toUpperCase;
