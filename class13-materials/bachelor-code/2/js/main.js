// declairing variable to use it again and agian in program
const andi=document.querySelector('#andi')
const claire=document.querySelector('#claire')
const sharleen=document.querySelector('#sharleen')


// sitting smurf on namees so called h2 to call when click it 
document.querySelector('#andiNext').addEventListener('click', first)
document.querySelector('#claireNext').addEventListener('click', second)
document.querySelector('#sharleenNext').addEventListener('click', third)


// making function for andi so called first to toggle the css class="hidden" show only andi
function first(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

//making function for claire so that on call it toggle the hidden class of css for pic of claire
function second(){
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
}
//making function for sharleen so that on call it toggle the hidden class of css for pic of sharleen
function third(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}