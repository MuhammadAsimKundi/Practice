//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value

//   if(day === "tuesday" || day === "thursday"){
//     console.log("YOU HAVE CLASS")
//   }else if( day === "saturday" || day === "sunday"){
//     console.log("Its The Weekend")
//   }else{
//     console.log("BORING")
//   }

// }
//sitting smurf on check to call the function 
document.querySelector('#check').addEventListener('click', check)

// making function to perform action on smurf call
function check(){
  const day= document.querySelector('#day').value.toLowerCase() //.toLowerCase is used to convert all capital words to lowerCase
 

  if(day==="tuesday"|| day==="thursday"){
    alert("you have a class")
  }else if(day==="sunday"||day==="saturday"){
    alert("off days")
  }else{
    alert("fuck up")
  }
}

