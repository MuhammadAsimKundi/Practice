// when you display on Final rose it shows nikki winner contestent on screen and
// hide other two  sharleen and claire

// sitting smurf in dom to listen requests and call function 
document.querySelector('#finalRose').addEventListener('click', hiddingLoosers)
// making function to run on call of smurf
function hiddingLoosers(){
// hidding sharleen and claire through style.display in dom 
document.querySelector('#claire').style.display='none'
document.querySelector('#sharleen').style.display= 'none'
}