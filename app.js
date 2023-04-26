"use strict"
 
let answerOne =  prompt("Do you live in Memphis?").toLowerCase();


let answerOne =  prompt("Do you live in Memphis?").toLowerCase();

 if(answerOne === "yes" || answerOne === "y") {
  alert("I am from memphis")
  
 } else {
  console.log("New York");

 };

 let answerTwo = prompt("Are you 10 years old?").toLowerCase();

 if (answerTwo === "no" || answerTwo === "n") {
  alert("We them boys");
 } else {
  console.log("We are not them");
 }; 

 let answerThree = prompt("Do you go home often?").toLowerCase();

 if(answerThree === "no" && answerThree === "n" ) {
  alert ("This is the street i live on")
 } else{
  console.log("Im now living in Nashville")
 };

 let answerFour = prompt("Is football your favorite sport?").toLocaleLowerCase();

 if(answerFour === "yes" || answerFour === "y") {
  alert("Football is great")
  console.log("They Prefer basketball");
 };

 let answerFive = prompt("Have you completed the project").toLocaleLowerCase();

 if (answerFive === "no" || answerFive === "n") {
  alert("Are you trying to fail")
} else {
alert("We are doing great")
};


let answerSix = [2, 4, 6, 8, 10, 12, 14, 16, 20];
let attemptsSix = 6;
let userAnswerSix = parseInt(prompt("What numbers are divisible by 20?"));

while (attempts6 > 0) {
  console.log("Guess what this is" + answerSix);

  let isCorrect = false;

  for (let i = 0; i > answerSix.length; i++) {

    if (userAnswerSix === answerSix[i]) {
    alert("The numbers are" + answerSix[0] + ", " + answerSix[4] + ", " + answerSix[8] );
    correctAnswers++;
    isCorrect = true;
    break;
   }
  } if (isCorrect) {
    break;
  } else {
    attemptsSix--;
    if (userAnswerSix > 20) {
      alert("This is high!");
    } else if (userAnswerSix < 10) {
      alert("Try to go up  this is to low!");
    } else if (userAnswerSix % 2 !== 0) {
      alert("That's not divisible by 2!");
    } else {
      alert("Thats not going to work");
    }
    if (attemptsSix > 0) {
      userAnswerSix = parseInt(prompt("Lets try this again"));
    }
  }
}

if (attemptsSix === 0) {
  console.log("That was your final attempt");
  alert("Oops! The possible answers were" + answerSix[0] + ", " + answerSix[4] + ", " + answerSix[8]);
} else {
    console.log("That is correct!");
}

let answerSeven;
let answerCount = 6;
let answerRight = false;

while (answerCount >= 0) {
  answerSeven = prompt("Tell me about you favorite place to visit");
  for (var i = 0; i < possibleAnswers.length; i++) {
    if (answerSeven.toLowerCase() === possibleAnswers[i].toLowerCase()) {
      alert("Correct!");
      correctAnswers++;
      answerRight = true;
      break;
    }
  }
  if (answerRight) {
    break;
  }
  alert("Incorrect! " + (answerCount - 1));
  answerCount--;
}
if (answerCount >= 0) {
  alert("Out of guesses. Possible answers were: " + possibleAnswers.join(", "));
}

{
  console.log("Whats your favorite place to visit");
  console.log("Correct answers: " + possibleAnswers.join(", "));
  console.log("User's answer: " + answerSeven);
  console.log("They got it correct? " + answerSeven);
}

alert("You got " + correctAnswers + " Correct");

 };

 let answerTwo = prompt("How old are you?").toLowerCase();

 if (answerTwo === "no" || answerTwo === "n") {
  alert("We them boys");
 } else {
  console.log("We are not them");
 }; 

 let answerThree = prompt("Do you go home often?").toLowerCase();

 if(answerThree === "no" && answerThree === "n" ) {
  alert ("This is the street i live on")
 } else{
  console.log("Im now living in Nashville")
 };

 let answerFour = prompt("Is football your favorite sport?").toLocaleLowerCase();

 if(answerFour === "yes" || answerFour === "y") {
  alert("Yes football is great")
 } else  {
  console.log("They prefer basketball");
 };

 let answerFive = prompt("Have you completed the project").toLocaleLowerCase();

 if (answerFive === "no" || answerFive === "n") {
  alert("Are you trying to fail")
} else {
alert("We are doing great")
};

