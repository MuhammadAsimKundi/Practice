//Create a function that grabs the number of snacks from the input and tells you to stop that many times
//sitting smurf on the h2 'click for help' to run the function
// document.querySelector('h2').addEventListener('click', stopSnacking)

// function stopSnacking(){
//     // storing the value of input in variable to print warning that number if times later in h2'stops'
//     let numOfSnacks =Number( document.querySelector('input').value)
//     //making warning place empty to write down warning again 
//     document.querySelector('#stops').innerText =''
//     for(i=1; i <= numOfSnacks; i++){
//         document.querySelector('#stops').innerText +=' stop!'
//     }
// }

























//Create a function that grabs the number of snacks from the input and tells you to stop that many times

//sitting smurf on h2 'click for help' to call the function and warns us about that 
document.querySelector('#help').addEventListener('click', warning)

function warning(){
    let snackNums= Number(document.querySelector('input').value) // using Number() to take value from input as number

    //USING for loop to print the waning the number of times you entered in input 
    for(i=1 ; i <= snackNums; i++){

        //putting warningin dom in h2 
        document.querySelector('#stops').innerHTML += ' stop its dangerous for health'
    } 
}