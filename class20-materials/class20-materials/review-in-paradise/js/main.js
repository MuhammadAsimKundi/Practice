// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let foodie = 5;
let pizza = foodie;
alert(pizza)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let games = 'i like cricket'
//alert(games[1]) using index number like what we use in array because string in variable acts as an array
alert(games.charAt(2))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threenums(n1,n2,n3){
    alert((n1/n2)*n3)
}
threenums(8,2,2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cuberoot(num){
    console.log(Math.cbrt(num))
}
cuberoot(3)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthChecker(month){
    let monthy = month.toLowerCase()
    if(monthy == 'june' || monthy == 'july' || monthy == 'august'){
        alert('yay')
    }else{
        alert('booo')
    }
}
monthChecker('July')

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skipper(num){
    for(i=1; i<=num; i++){
        if(i%5 !== 0){
            console.log(i)
        }
    }
}
skipper(30)