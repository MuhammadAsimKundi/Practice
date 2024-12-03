// *Variables*
// Create a variable and console log the value
let zebra= 10;
console.log('zebra')

// Create a variable, add 10 to it, and alert the value
zebra += 10;
alert( zebra)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtraction(n1,n2,n3,n4){
   let subtractions=n1-n2-n3-n4
   alert(subtractions)
}
subtraction(20,3,4,5)
// Create a function that divides one number by another and returns the remainder
function division(n1,n2){
    return n1/n2
}

console.log(division(10,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twoNums(n1,n2){
    if(n1+n2>50){
        alert('jumanji')
    }else{
        alert('warning! You are wrong')
    }
}

twoNums(30,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function prodThreeNums(n1,n2,n3){
    if(n1*n2*n3%3==0){
        alert('you did it perfect')
    }else{
        alert('Warning! you are wrong')
    }
}
prodThreeNums(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function printing(word,num){
    for(i=1; i <= num ; i++){
        console.log(word) // printing in console
        document.querySelector('h1').innerHTML += word // printing in document
    }
}

printing(' this was the last one bro', 15)