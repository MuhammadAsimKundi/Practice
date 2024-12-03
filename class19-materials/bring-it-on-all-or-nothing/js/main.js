// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value
// // let zebra = true;
// // alert(zebra)

// // Declare a va5riable, reassign it to your favorite color, and console log the value
// let favoriteColor = 'black & white'
// console.log(favoriteColor)

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function fourNums(n1,n2,n3,n4){
//     return (n1+n2+n3)/n4
// }

// console.log(fourNums(4,2,2,2))

// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function twoNums(n1,n2){
//     console.log(Math.pow(n1,n2))
// }

// twoNums(2,10)

// // *Conditionals*
// // Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// // function bolString(boolean, string){
// //     if(boolean){
// //         alert(string)
// //     }else{
// //         console.log(string)
// //     }
// // }

// // bolString(true,'you coded it!')
// const alertOrLog = (b, string) => b ? alert(string) : console.log(string)
// alertOrLog(true, 'this is the code')
// //*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number, 
// //but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number,
// // and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
// function FizzBuzz(number){
//     for(i=1; i <= number; i++){
// //   console.log(i)  // if we log'i' before if condition it will log both number and fizz or fizzbuzz

// // we writing (i%3==0 && i%5==0) to check both the at first to print fizzbuzz if we dont do that it wont log fizzbuzz because (i%5==0) or(i%3==0) should already ran for this number and the result is printed so there would be no number available that is divisible by both 3 and 5 

//     if(i%3==0 && i%5==0){
//         console.log('fizzbuzz')
//     }else if(i%3==0){
//         console.log('fizz')
//     }else if(i%5==0){
//         console.log('buzz')
//     }else{
//         console.log(i)
//     }
//     }
    
// }
// // FizzBuzz(30)





// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let jan= true;
alert(jan)

// alert(zebra)
// Declare a variable, reassign it to your favorite color, and console log the value
let favColor;
favColor = 'Black and White';
console.log(favColor)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function fourNumbers(n1,n2,n3,n4){
    return (n1+n2+n3)/n4
}
console.log(fourNumbers(2,2,2,2))
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(base,power){
    let zebra = Math.pow(base,power)
    console.log(zebra)
}
power(2,10)
// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function boolString(boolean,string){
    if(boolean){
        alert(string)
    }else{
        console.log(string)
    }
    
}
boolString(true,'you fucked up third time now, code it again and again')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, 

//but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number,

// and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
