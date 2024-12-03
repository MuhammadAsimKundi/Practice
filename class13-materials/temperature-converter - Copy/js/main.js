//sitting smurf in dom to listen requests
document.querySelector('#convert').addEventListener('click', convert)
//making function to run when smurf call it
function convert(){
// making input id variable to get value when need in later on
let temp = document.querySelector('#temp').value
//adding formula to variable to convert temp 
temp = temp*1.8+32
//showing temp in results on dom
document.querySelector('#results').innerHTML= temp
}