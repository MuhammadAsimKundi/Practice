//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty.
// Please create a function that reverses your list and prints it to the console. 
let pOrder= ['smurfs', 'weedle' , 'charmender']
function reverse(array){
    console.log(array.reverse())
}
reverse(pOrder)


//Given two integer arrays a, b, both of length >= 1, create a program that returns true 
//if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// shorter way using array.reduce() method


function CheckAB(a,b){
    return a.reduce((acc,c)=> acc+ c**2 , 0) > b.reduce((acc,c) => acc + c**3 , 0) 
}
console.log(CheckAB([5,5,5], [6,6,6]))

//lengthy way
// function check(a,b){
//         //taking sqr of the a and adding each element of b
//         //square
//         let ansSquare = []
//         for(let i=0 ; i <= a.length-1; i++){
//              ansSquare.push(a[i]*a[i])
//             }
        
//         //adding
//         let ansSquareOne = 0
//         for(let i = 0; i <= ansSquare.length-1; i++){
//             ansSquareOne+= ansSquare[i]
//         }

//         //taking cube for elements of b and adding each element of the b
//         //cube
//         let bansCube = []
//         for(let i=0; i<=b.length-1;i++){
//              bansCube.push(b[i]*b[i]*b[i])
//             }
        
//         //adding
//         let bansCubeOne = 0
//         for(let i = 0; i <= bansCube.length-1; i++){
//             bansCubeOne+= bansCube[i]
//         }
       
//         //now checking if the sum of square of each element of a is strickly larger then the sub of cube of each element of c
//         if(ansSquareOne < bansCubeOne){
//             console.log('The sum of square of each element of A = '+ansSquareOne+' is smaller then the sum of cube of each element of b = '+ bansCubeOne)
//         }else{
//             console.log('The sum of square of each element of A = '+ansSquareOne+' is Strictly larger then the sum of cube of each element of b = '+ bansCubeOne)
            
//         }
//     } 
//     check([2,4,5,5,6],[9,5,4,3,3])  
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


function multiple(arr){
    return arr.filter((e,i) => e%i === 0)
} 
multiple([22,-6,32,82,9,5])
// console.log(isMultiple(arr))
//Given an array of integers as strings and numbers, return the sum of the array values
// as if all were numbers.Return your answer as a number.
// let integers = [1,'2',3,4,'5',6]
// let sumOfArray = 0
// for (let i=0 ; i<=integers.length-1; i++){
//     sumOfArray += Number(integers[i])
// }
// console.log(sumOfArray)
// function sum(arr){
//     return arr.reduce((acc,c) => acc + Number(c) , 0)
// }



const sss = r => r.reduce((a,c) => +a+ +c ,0)

console.log(sss(['5',5,4,3,'3']))