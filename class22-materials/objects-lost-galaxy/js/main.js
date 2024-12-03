//Create a mouse object that has four properties and three methods
// let mouse = {}
// mouse.color = 'grey'
// mouse.shape = 'oval'
// mouse.legs = 'four'
// mouse.size = 'small'
// let mouse = {
//     color : 'grey',
//     shape : 'oval',
//     legs : 'four',
//     size : 'small'
// }
// mouse.checkShape = function(shape){
//     console.log(`the shape of the mouse is ${shape}`)
// }
// mouse.checkShape(mouse.shape)

// mouse.checkSize = function(sizo){
//     console.log(`the size of the mouse is ${sizo}`)
// }
// mouse.checkSize(mouse.size)

// mouse.showColor= function(showCoo){
//     console.log(`the color of the mouse is ${showCoo}`)
// }
// mouse.showColor(mouse.color)


//CONSTRUCTOR
function Animal(Name,Color,legs,Gender,type){
    this.name = Name;
    this.color = Color;
    this.legs = legs;
    this.gender = Gender;
    this.Type = type;

    this.bark = function(){
        alert(`My ${this.Type} bark at strangers`)
    }
}

let myPet = new Animal('yoyo','black',4,'male','pet')

let newPuppy = new Animal('jacky', 'brown' , 'four' , 'female' , 'pet')
