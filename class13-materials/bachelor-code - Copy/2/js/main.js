// when you click on contestant name its show that name picture \

// making variable of image id for dry and less conde to use les code later on
const andi= document.querySelector('#andi')
const claire=document.querySelector('#claire')
const sharleen=document.querySelector('#sharleen')
// sitting smurf in dom on names to show picture when click on name
document.querySelector('#andiNext').addEventListener('click' , andiFirst)
document.querySelector('#claireNext').addEventListener('click' , claireFirst)
document.querySelector('#sharleenNext').addEventListener('click', sharleenFirst)

//making function to run when smurf call them showing the related picture and hidding the irrelated ones  
function andiFirst(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function claireFirst(){
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
}

function sharleenFirst(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}