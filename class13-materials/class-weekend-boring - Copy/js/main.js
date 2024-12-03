//sitting smurf in dom to listen request
document.querySelector('#check').addEventListener('click', weekCheck)
//making function to run on call of smurf
function weekCheck(){
//making function to use value later on on call
const day= document.querySelector('#day').value.toLowerCase()
//in function making conditions to see which condition is true

if (day=== 'monday' || day === 'wednesday' || day === 'friday'){
  document.querySelector('#placeToSee').innerHTML= 'its practice day my friend'
}else if(day==='tuesday' || day === 'thursday'){
  document.querySelector('#placeToSee').innerHTML= 'its OUR classday with leon'
}else{
  document.querySelector('#placeToSee').innerHTML=' Its weakend bro lets go to play some cricket in university ground'
}
}