"use strict"
 
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
