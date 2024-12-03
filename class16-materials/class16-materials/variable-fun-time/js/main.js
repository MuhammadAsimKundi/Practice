// //--- Easy
// //create a variable and assign it a number
// let gogo=45;
// //minus 10 from that number
// gogo-=10;
// //print that number to the console
// console.log(gogo)
// //--- Medium
// //create a variable that holds a value from the input
// let holder=document.querySelector("#danceDanceRevolution").value
// //add 25 to that number
// holder+=25;
// //alert that number
// alert(holder)
// //--- Hard
// //create a variable that holds the h1
// let holdIt=document.querySelector("h1")
// //add an event listener to that element that console logs the sum of the two previous variables
// holdIt.addEventListener("click", addition)

// function addition(){
//     console.log(gogo+ Number(holder))
// }


//--- Easy

//create a variable and assign it a number
let check = 25;
//minus 10 from that number
check -= 10
//print that number to the console
console.log(check)
//--- Medium

//create a variable that holds a value from the input
//let hold =Number( document.querySelector('#danceDanceRevolution').value) // using Number() here to take only number from input 
let hold =document.querySelector('#danceDanceRevolution').value  // we will use number() in last when needed (you can see in function ''working'')
//add 25 to that number
hold += 25
//alert that number
alert(hold)
//--- Hard

//create a variable that holds the h1
let holdH1= document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
holdH1.addEventListener('click', working)

// making function that would console log the sum of two previous variables upon call from smurf
function working(){
    console.log(check + Number(hold)) // using number with hold because simple value from input makes the other value string so, hold is acting as a string here and number() is converting it into number
    
}