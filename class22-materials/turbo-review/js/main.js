// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' I like drinking simple water '
favDrink = favDrink.trim()
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
// we can find it with two ways
let favFruit = 'Mango Water-Melon Apple Grapes Peach'
if(favFruit.search('Apple') !== -1){
    console.log('yess')
}else{
    console.log('no')
}
// or using includes built in function
console.log(favFruit.includes('Apple'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function randomm(){
    let result = Math.random()
    if(result < .33){
        return 'rock'
    }else if(result < .66){
        return 'paper'
    }else{
        return 'scissors'
    }
}
console.log(randomm())


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
 function checkWin(playerChoice){
    let botChoice = randomm()
    if((playerChoice === 'rock' && botChoice === 'paper') || (playerChoice === 'paper' && botChoice === 'scissors') || 
    (playerChoice === 'scissors' && botChoice === 'rock')){
        return 'you win'
    }else if(playerChoice === botChoice){
        return 'you tied yp'
    }else{
        return 'you lose'
    }
 }

 console.log(checkWin('scissors'))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playXTimes(arr){
    // for(let i = 0; i<= arr.length-1 ; i++){
    //     console.log(checkWin('scissors')) 
    // }
    arr.forEach((x) => console.log(checkWin('rock')))
}
playXTimes(['scissor','rock','paper','scissor','scissor'])   