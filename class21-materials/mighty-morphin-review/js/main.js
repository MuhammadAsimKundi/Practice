// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let zebra = 'Saturday'
zebra = zebra.toUpperCase();
alert(zebra)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let lastThree = 'NOTHING VENTURE NOTHING HAVE'
alert(lastThree.slice(-3))

//or whan we have to check the character at any any index it will show us the same character at index given
// let index = 4
// alert(`the character at ${index} is ${lastThree.charAt(index)}`)



// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNums(n1,n2,n3,n4,n5){
    alert(Math.abs(100-(n1+n2+n3+n4+n5)))
}
fiveNums(5,5,5,10,10)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function threeNums(n1,n2,n3){
   let maxi = Math.max(n1,n2,n3)
    let mini = Math.min(n1,n2,n3)
    alert(`The small num is ${mini} and larger num is ${maxi}`)
}
threeNums(1,5,500)


// *Conditionals*
//Create a function that returns heads or tails randomly 
//and as fairly as possible. Call the function.
function headsTails(){
    let result = Math.random()
    if(result < 0.5){
        return 'heads'
    }else{
        return 'tails'
    } 
 }
console.log(headsTails())

// we do that with ternary or so called one-line function
 const headsTails = _ => Math.random() < 0.5 ? 'heads' : 'tails'

//*Loops*
//Create a function that takes in a number.Console log the result of heads or tails
// using the previous function x times where x is the number passed into the function. Call the function.
function headsTailsXTimes(x){
    for(let i = 1 ; i <= x ; i++){
        console.log(headsTails())
    }
}
headsTailsXTimes(8)















//function flipFlipHeadsOrTails(n){
//     for(let i= 1; i<=n ; i++){
//         let result = headsTails()
//         console.log(result)
//     }
// }
// flipFlipHeadsOrTails(10)
