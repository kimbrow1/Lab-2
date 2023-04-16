"use strict"
 
  let answerOne =  prompt("Do you live in Memphis?").toLowerCase();

   if(answerOne === "yes" || answerOne === "y") {
    alert("I am from memphis")
    
   } else {
    console.log("New York");
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

   let answerFour = prompt("How long have you been here?").toLocaleLowerCase();

   if(answerFour <= 10) {
    alert("Thats not long")
   } else  {
    console.log("Im here to stay");
   };

   let answerFive = prompt("Have you completed the project").toLocaleLowerCase();

   if (answerFive === "no" || answerFive === "n") {
    alert("Are you trying to fail")
  } else {
  alert("We are doing great")
 };