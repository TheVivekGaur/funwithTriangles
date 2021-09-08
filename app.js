var angleFirst = document.querySelector('#angle-first');
var angleSecond = document.querySelector('#angle-second');
var angleThird = document.querySelector('#angle-third');
var checkButton = document.querySelector('#check-btn');
var output = document.querySelector('#output');

checkButton.addEventListener('click' , submitHandler)

function submitHandler (){
 var firstAngle = Number(angleFirst.value) ;
 var secondAngle = Number(angleSecond.value);
 var thirdAngle =Number(angleThird.value);

 calculateSumOfAngles(firstAngle, secondAngle,thirdAngle);
}

function calculateSumOfAngles( first, second , third){
 var totalSum = Number(first + second + third);
 isTriangle(totalSum)
}

function isTriangle (sumOfAngles) {
 if(sumOfAngles == 180){
  output.innerText = "Yay!! Angles form a triangle"
 } else{
  output.innerText='Oh NO!! Angles doesnt form a triangle';
 }
}

