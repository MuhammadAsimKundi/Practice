//Arrays
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,+'4',335,6]

// let sum = 0
// arr.forEach((x)=> sum += x)
// console.log(sum)

//                  or we can do with method a good/premium way 
// let sum = arr.reduce((acc , c)=> acc + c,0) 
// alert(sum)
const sum  = arr.reduce((acc,c) => acc + c , 0)
alert(sum)


//Create a function that takes in an array of numbers
function squareMaker(arr){
    let newArray = []
//Return a new array of numbers that is every original number squared
    for(i=0; i< arr.length ;  i++){
        let sqRoot = newArray.push(arr[i] * arr[i])
    }
    console.log(newArray)
   
}
squareMaker([2,3,4,5,6])

//Create a function that takes string
function reverseString(string){
    console.log(string.split('').reverse().join(''))
}
reverseString('test your typing skills')
//Create a function that takes in a string
function palindromeChecker(string){
    let stringee = string.split('').reverse().join('')
    //Alert if the string is a palindrome or not
    if(string=== stringee){
        alert('This string is palindrome')
    }else{
        alert('This string is not palindrome')
    }
}
palindromeChecker('server')

//Create a function that takes number
function numberPalindrome(num){
    let numi = num.toString()
    let nume = numi.split('').reverse().join('')
    if(numi === nume){
        alert('This stringNumber is palindrome')
    }else{
        alert('This stringNumber is not palindrome')
    }
}
numberPalindrome(191)
//Alert if the number is a palindrome or not