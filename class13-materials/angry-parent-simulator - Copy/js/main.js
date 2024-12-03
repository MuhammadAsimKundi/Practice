// sitting smurf in dom
document.querySelector('#yell').addEventListener('click', program)

// making event function to occur on call of smurf
function program(){
  // making variable to use for later on
  const fN=document.querySelector('#firstName').value
  const fM=document.querySelector('#firstMiddle').value
  const lM=document.querySelector('#lastMiddle').value
  const lN=document.querySelector('#lastName').value


  // adding formula for addition of variable and showing it on smurf
  document.querySelector('#placeToYell').innerHTML= `${fN} ${fM} ${lM} ${lN}`



}








// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }
