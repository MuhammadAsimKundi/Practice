// *Variables*
// Declare a variable, assign it a value, and alert the value
let folks= 15;
alert (folks)
// Create a variable, divide it by 10, and console log the value
folks /=10;
console.log(folks)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function proThreeNums(n1,n2,n3){
    let prod= n1*n2*n3
    alert(prod)
}

proThreeNums(5,6,3)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function fourNums(n1,n2,n3,n4){
    let add= n1+n2
    console.log(add)
    let sub= n3-n4
    console.log(sub)
}
fourNums(2,2,4,1)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second,
// and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function threeNums(first,second,third){
    let add = 100 + first
    add -= second
    add /= third
    if(add >= 25){
        console.log('we hava a winnar')
    }else{
        console.log('we have a looser')
    }
}
threeNums(10,20,2)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function week(day){
    let days= day.toLowerCase(); // converting all letters to lowerCase
    
    if(days == 'saturday' || days == 'sunday'){
        alert('Its fucking weekend')
    }else if(days == 'monday' || days == 'tuesday' || days == 'wednesday' || days == 'thursday' || days == 'friday'){
        alert('Its great week day Gentleman.')
    }else{
        alert('try again!')
    }
}
week('Thursday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function number(num){
    // xtaking for loop for all the numbers less then num
    for(i=1; i <= num; i++){
        //using if-condition to print the every third number after the past number
        if(i%3 == 0){
            console.log(i)
        }
    }
   
}

number(30)