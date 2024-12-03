// *Variables*


// Create a variable and console log the value
let vari = 25
console.log(vari)

// Create a variable, add 10 to it, and alert the value
let apple= 5
apple+=10
alert(apple);




// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

document.querySelector('#subtract').addEventListener('click', subtracting)

function subtracting(){
    let nF=document.querySelector('#numberOne').value
    let nS=document.querySelector('#numberTwo').value
    let nT=document.querySelector('#numberThree').value
    let nFo=document.querySelector('#numberFour').value

    let total= nF-nS-nT-nFo
    document.querySelector('#results').innerHTML= total

}

// Create a function that divides one number by another and returns the remainder
function division(n1,n2){
    let result=n1/n2
    return result;
    
}
console.log(division(2,15));    







// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let nn1=25
let nn2=35

let n12=nn1+nn2

if(n12>50){
    alert("Jumman ji")
}else{
    console.log("small number")
}


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function productThree(num1,num2,num3){
    let prod=num1*num2*num3
    if(prod%3==0){
        alert("ZEBRA")
    }
}

productThree(1,3,3);

