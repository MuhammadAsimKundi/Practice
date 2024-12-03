//making variable for dry and less code 
const contestants= document.querySelectorAll('.contestant')

// sitting smurf on classes of .contestant to run function 
Array.from(contestants).forEach(element=>element.addEventListener('click' , nishaanThoon))

// making function to run on call of smurf
function nishaanThoon(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert('its the wrong one');
	}
}
//in function creating condition to run or show correct thing or picture
