'use strict';

let user = prompt('What is your name?');
console.log('The user\'s name is ' + user);
alert('Hey ' + user + ', welcome to the site!');

let i = 0;

let answer1 = prompt('Time to play a guessing game. Answer all correctly and win a prize! First, is my favorite sports team the Green Bay Packers?');
switch (answer1.toLowerCase()) {
case 'yes':
case 'y':
  //console.log('Sorry that\'s incorrect, in fact I hate them. Stupid cheeseheads');
  alert('Sorry that\'s incorrect, in fact I hate them. Stupid cheeseheads');
  break;
case 'no':
case 'n':
  //console.log('Correct!');
  alert('Correct!');
  i++;
  break;
default:
  //console.log('Please answer "yes" or "no" (y/n also acceptable)');
  alert('Please answer "yes" or "no" (y/n also acceptable)');
}

let answer2 = prompt('Do I live in Washington State?');
switch (answer2.toLowerCase()) {
case 'yes':
case 'y':
  //console.log('Correct!');
  alert('Correct!');
  i++;
  break;
case 'no':
case 'n':
  //console.log('Sorry, that\'s incorrect, moved here last year!');
  alert('Sorry, that\'s incorrect, moved here last year!');
  break;
default:
  //console.log('Please answer "yes" or "no" (y/n also acceptable)');
  alert('Please answer "yes" or "no" (y/n also acceptable)');
}

let answer3 = prompt('Do I like the Swedish extreme metal band Meshuggah?');
switch (answer3.toLowerCase()) {
case 'yes':
case 'y':
  //console.log('Correct! They are my favorite band!');
  alert('Correct! They are my favorite band!');
  i++;
  break;
case 'no':
case 'n':
  //console.log('Sorry, they are actually the greatest band ever. Incorrect.');
  alert('Sorry, they are actually the greatest band ever. Incorrect.');
  break;
default:
  //console.log('Please answer "yes" or "no" (y/n also acceptable)');
  alert('Please answer "yes" or "no" (y/n also acceptable)');
}

let answer4 = prompt('Do I like to surf?');
switch (answer4.toLowerCase()) {
case 'yes':
case 'y':
  //console.log('Sorry, that\'s incorrect. I like to skateboard some though!');
  alert('Sorry, that\'s incorrect. I like to skateboard some though!');
  break;
case 'no':
case 'n':
  //console.log('Correct!');
  alert('Correct!');
  i++;
  break;
default:
  //console.log('Please answer "yes" or "no" (y/n also acceptable)');
  alert('Please answer "yes" or "no" (y/n also acceptable)');
}

let answer5 = prompt('Is Street Fighter II the best fighting game ever?');
switch (answer5.toLowerCase()) {
case 'yes':
case 'y':
  //console.log('Sorry, that\'s incorrect. It\'s not even the best Street Fighter!');
  alert('Sorry, that\'s incorrect. It\'s not even the best Street Fighter!');
  break;
case 'no':
case 'n':
  //console.log('Correct! Third Strike clears!');
  alert('Correct! Third Strike clears!');
  i++;
  break;
default:
  //console.log('Please answer "yes" or "no" (y/n also acceptable)');
  alert('Please answer "yes" or "no" (y/n also acceptable)');
}

let answer6 = prompt('What is my lucky number? You get four guesses.');
for (let count = 1; count < 4; count++) {
  if (answer6 > 4) {
    answer6 = prompt('Too high, guess again!');
  } else if (answer6 < 4) {
    answer6 = prompt('Too low, guess again!');
  } else if (answer6 == 4) {
    alert('Congratulations! You are correct!');
    i++;
    count = 4;
  } else {
    answer6 = prompt('Make sure you guess a number!');
  }
}

let answer7 = prompt('Guess a state I have lived in (not counting Washington since you already know that one!)');
let states = ['Iowa', 'Arizona', 'Michigan', 'Florida', 'Tennessee', 'Ohio'];

for (let j = 1; j < 6; j++) {
  let k = 0;
  while (k <= 5) {
    if (answer7 === states[k]) {
      alert('That\'s correct!, I lived in Iowa, Arizona, Michigan, Florida, Tennessee, and Ohio!');
      i++;
      j = 6;
      break;
    } else if (answer7 !== states[k]) {
      k++;
    }
  }
  if (answer7 !== states[k]) {
    answer7 = prompt('That\'s incorrect, try again');
  }
}
if (i === 7) {
  alert('You scored: ' + i + ' points! A perfect score!');
} else {
  alert('You scored: ' + i + ' points! Better luck next time!');
}
/*if (i < 5) {
  //console.log('Sorry ' + user + ', you didn\'t end up getting them all right. Feel free to try again!');
  alert('Sorry ' + user + ', you didn\'t end up getting them all right. Feel free to try again!');
}
else {
  //console.log('Good job ' + user + '! As a reward you receive: positive reinforcement! Keep up the great work!');
  alert('Good job ' + user + '! As a reward you receive: positive reinforcement! Keep up the great work!');
}
*/
