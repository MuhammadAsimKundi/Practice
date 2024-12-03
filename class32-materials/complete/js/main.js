// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }
// }
// class Cat extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }



//another example of oop code





class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')

let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
}



//another oop example

class Lecture{
    constructor(instructor,lectureName){
        this._instructor = instructor
        this._lectureName = lectureName
    }
    get instructor(){
        return this._instructor
    }
    get lectureName(){
        return this._lectureName
    }
    period(){
        console.log(`Regularly attending the classes lead to succes and victory in life goal`)
    }
}
class MorningLecture extends Lecture{
    constructor(instructor,lectureName,time,type){
        super(instructor,lectureName)
        this._time = time
        this._type = type
    }
    get time(){
        return this._time
    }
    get type(){
        return this._time
    }
    period(){
        super.period()
        console.log(`This lecture is mostly working on theory analysis of skills`)
    }
}

class EveningLecture extends Lecture{
    constructor(instructor,lectureName,skills){
        super(instructor,lectureName,)
        this._skills = skills
    }
    get skills(){
        return this._skills
    }
    period(){
        super.period()
        console.log(`This lecture is based on Skills learning and lab work`)
    }
}

let firstClass = new MorningLecture('Maam Sabeen sher', 'Java','2hrs','Theory-lecture')
let secondClass = new EveningLecture('Sir Bilal Bashir', ' Python','PYTHON-LANGAUGE')
let mainClass = new EveningLecture('Leon Noel','Javascript' , 'Problem Solving in Javascript')

//polymorphism

let Schedule = [firstClass,secondClass,mainClass]
for(det of Schedule){
    det.period()
}


//cloths oop example

class Cloths{
    constructor(brand,season){
        this._brand = brand
        this._season = season
    }
    get brand(){
        return this._brand
    }
    get season(){
        return this._season
    }
    fact(){
        console.log(`Famous brands are specials with new trends`)
    }
}

class GirlsClothes extends Cloths{
    constructor(brand,season,type){
        super(brand,season)
        this._type = type

    }
    
    get type(){
        return this._type
    }
    fact(){
        super.fact()
        console.log(`Girls clothes are very expensive especially the famous brands`)
    }

}

class MensClothes extends Cloths{
    constructor(brand,season,pieces,price){
        super(brand,season)
        this._pieces = pieces
        this._price = price
    }
    get pieces(){
        return this._pieces
    }
    get price(){
        return this._price
    }
    fact(){
        super.fact()
        console.log(`Mens Outfitts are not that much expensives`)
    }
}

let Asim = new MensClothes('J.-BRAND','WINTER','3PIECE',19000)
let Amir = new MensClothes('MTJ.-brand','winter','2piece',15000)
let Effat = new GirlsClothes('KHAADI-BRAND','SUMMER','Fully-Pashtoon Cultural dress')

//polymorphism

let fitters = [Asim,Amir,Effat]

for(wow of fitters){
    wow.fact()
}


// OOP PAPER EXAMPLE

class Paper{
    constructor(name,type){
        this._name = name
        this._type = type
    }
    get name(){
        return this._name
    }
    get type(){
        return this.type
    }
    cautions(){
        console.log(`Mid papers are easy camparing to final papers`)
    }
}

class MidTerm extends Paper{
    constructor(name,type,prep){
        super(name,type)
        this._prep = prep
    }
    get prep(){
        return this._prep
    }
    cautions(){
        console.log(`Syllabus is half for mid-term papers, So ${this._prep} preparation`)
    }
}

class FinalTerm extends Paper{
    constructor(name,type,syllabus){
        super(name,type)
        this._syllabus = syllabus
    }
    get syllabus(){
        return this._syllabus
    }
    cautions(){
        super.cautions()
        console.log(`So, the syllabus for FINAL TERM is ${this._syllabus} course that we studied during the semester`)
    }
}

//making objects of the classes
let course1Mid = new MidTerm('DATA VISUALIZATION', 'MID-TERM', 'GOOD')
let course1Final = new FinalTerm('DATA VISUALIZATION','FINAL-TERM','FULL')

let course2Mid = new MidTerm('SOFTWARE ENGINEERING','MID-TERM', 'GOOD')
let course2Final = new FinalTerm('SOFTWARE ENGINEERING','FINAL','COMPLETE')

let course3Mid = new MidTerm('DATA STRUCTURES & ALGORITHMS','MID-TERM','NOT-GOOD')
let course3Final = new FinalTerm('DATA STRUCTURES & ALGORITHMS','FINAL','COMPLETE')

//polymorphism
let course = [course1Mid,course1Final,course2Mid,course2Final,course3Mid,course3Final]

for(subject of course){
    subject.cautions()
}