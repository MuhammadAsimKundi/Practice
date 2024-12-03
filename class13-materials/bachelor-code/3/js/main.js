// assigning all class of contestant to a variable to use it later

const contestants= document.querySelectorAll('.contestant')

// sitting smurf(event listener) on both h2 classes to call the function on click

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

//making function to perform action on smurf call
function checkForRose(){

	//using if else statement to show the right answer

	// if(click.target.classList.contains('rose')){
		if(click.target.classList.contains('rose')){

		//going to toggle to  hidden class added to image of nikki

		document.querySelector('#nikki').classList.toggle('hidden')

	}else{

		//alert the wrong if click on wring option or name 

		alert("you got fucked by this small program so many times!");

	}
}


// const contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click',checkForRose ))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }