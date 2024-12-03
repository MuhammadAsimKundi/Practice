//sitting smurf on final rose to hide the pics when click or we can say to call the function
document.querySelector('#finalRose').addEventListener('click', hide)

//making function for the smurf to perform when call or when click on final rose
function hide(){
    //hiding the pics of sharleen and claire when fnction call
    document.querySelector('#claire').style.display='none'
    document.querySelector('#sharleen').style.display='none'
}