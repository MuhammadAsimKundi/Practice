//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function sirSavages(){
for(i=1; i<=21;i++){
    console.log(21)
}
}
sirSavages()
//Bonus can you make it print '21' 21 times to the dom?
// function sirSavage(){
//     for(i=1; i<=21;i++){
//        document.querySelector("#savageSays").innerHTML+=" 21"
//     }
//     }
//     sirSavage()

//                          or 

function sirSavage(num){
   for(i=1; i<=num; i++){
      document.querySelector("#savageSays").innerHTML += ' 21'
   }
}
sirSavage(21);