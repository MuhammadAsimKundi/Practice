// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

//   //Add what you should be doing - conditionals go here

//   document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
// }

//..........................................................................//


//place to put smurf in dom to listen requests
document.querySelector('#yell').addEventListener('click', gather)
//making function to run on the call of smurf
function gather(){
  //in function making variables to get value from input and use it for later on

  let fName=document.querySelector('#firstName').value
  let fMiddle=document.querySelector('#firstMiddle').value
  let lMiddle=document.querySelector('#lastMiddle').value
  let lName=document.querySelector('#lastName').value

//adding variable value and showing in dom
  document.querySelector('#placeToYell').innerHTML= fName + ' ' + fMiddle + ' ' + lMiddle + ' ' + lName
  
}









//..........................................................................//

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
