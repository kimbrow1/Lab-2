"use strict"

const { Button } = require("bootstrap");
const { Alert } = require("bootstrap");

 
  let answerOne =  prompt("Where do you live?").toLowerCase();

   if(answerOne === "memphis" || answerOne === "m") {
    alert("I am from memphis")
    
   } else {
    console.log("New York");
   };

   let answerTwo = prompt("How old are you?").toLowerCase();

   if (answerTwo === 30 || answerTwo === "n") {
    alert("We them boys");
   } else {
    console.log("We are not them");
   }; 

   let answerThree = prompt("What street you live on?").toLowerCase();

   if(answerThree === "yale" && answerThree === 15 ) {
    alert ("This is the street i live on")
   } else{
    console.log("Im now living in Nashville")
   };

   let answerFour = prompt("How long have you been here?").toLocaleLowerCase();

   if(answerFour <= 10) {
    alert("Thats not long")
   } if (answerFour > 10 ) {
    alert("How long you plan to stay?")
   } else  {
    alert("Im here to stay");
   };

   let answerFive = prompt("Have you completed the project").toLocaleLowerCase();

   if (answerFive === "no" || answerFive === "n") {
    alert("Are you trying to fail")
  } if (answerFive === "yes" || answerFive === "y"){
    alert("We are doing great!")
} else {
  alert("We are not doing great")
 };

 
   


