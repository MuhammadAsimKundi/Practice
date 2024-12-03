//Create a conditonal that checks their age
let age = 30;
//If under 16, tell them they can not drive
if(age==16){
    console.log('they cant drive')
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if(age<=18){
    console.log('they cant hate from outside the club, because they cant even get in')
}
//If under 21, tell them they can not drink
else if(age<21){
    console.log('they cant drink')
}
//If under 25, tell them they can not rent cars affordably
else if(age<25){/ console.log('they can not rent cars affordably')
}
//If under 30, tell them they can not rent fancy cars affordably
else if(age<30){
    console.log('they cant rent fancy cars affordably')
}
//If under over 30, tell them there is nothing left to look forward too
else if(age>=30){
    console.log('there is nothing left farward to look farward to ')
}




//--- Harder
laifjoijf
//On click of the h1
document.querySelector('h1').addEventListener('click', printing)

function printing(){
    //Take the value from the input
    let getter = Number(document.querySelector('#danceDanceRevolution').value)
    //Place the result of the conditional in the paragraph
    document.querySelector('p').innerHTML = getter
}

