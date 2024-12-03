//Write your pseduo code first! 
// 0 -> 30

// document.querySelector('#convert').addEventListener('click', converting)



// function converting(){
//     // need a valuae of celcius
//     let celcius=document.querySelector('#temp').value
//     // converting fro;m celciua to fehrenheit 
//     temp= temp*9/5+32
//     // show it
//     document.querySelector('#results').innerText = temp

// }

// //psuedo code first
// // 0 to 30
document.querySelector("#convert").addEventListener('click',convert)
  
function convert(){
//value 
let number=document.querySelector('#temp').value
   //converting to fegrenheigt
let convert=number*9/5+32;
    // showing it
document.querySelector('#results').innerHTML=convert
}




