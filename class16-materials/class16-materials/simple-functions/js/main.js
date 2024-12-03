//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtraction(n1,n2){
    let sub=n1-n2
    alert(sub)
} 
subtraction(10,5)
//create a function that divides three numbers and console logs the quotient
function division(n1,n2,n3){
    let divide=n1/n2/n3
    alert(divide)
}
division(20,2,2)
//create a function that multiplys three numbers and returns the product
function multiplication(n1,n2,n3){
    // let multiply=n1*n2*n3
    // return multiply;
    //or 
    return n1*n2*n3
    
}
alert(multiplication(20,3,2))
//---Medium
//create a function that takes in three numbers.
// Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function threeNums(n1,n2,n3){
    let sum=n1+n2;
    let dividi=n3/sum
    return dividi
}
console.log(threeNums(3,3,12));
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
function fourNums(n1,n2,n3,n4){
    let mul=n1*n2
    //If the product is greater than 100 add the sum of the last two numbers and console log the value. 

    if(mul>100){
        let add=n3+n4
        console.log(add)
    }  
    //If the product is less that 100, subtract the difference of the last two numbers and console log the value.//
    else if(mul<100){
        let sub=n3-n4
    }
    // If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
    else if(mul==100){
        let prod=n1*n2*n3
        let divide=prod/n4
        alert(divide)
    }

}

fourNums(10,10,5,2)
