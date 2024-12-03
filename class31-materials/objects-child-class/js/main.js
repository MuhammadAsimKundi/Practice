//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Wild extends Animal{
    constructor(name,inhabitant){
        super(name)
        this._inhabitant = inhabitant
    }
    get inhabitant(){
        return this._inhabitant
    }
    speak(){
        super.speak()
        console.log(`Wild animals make weared sounds in jungle`)
    }
}

class Pet extends Animal{
    constructor(name,breed,color){
        super(name)
        this._breed = breed
        this._color = color
    }
    get breed(){
        return this._breed
    }
    get color(){
        return this._color
    }
    
    speak(){
        super.speak()
        console.log(`These animals are good to be pets`)
    }
}

let zebra = new Wild('zebra', "africa's jungle")
let dog = new Pet('Tom' , 'Asian-bully','white')

// polymorphism
let creature = [zebra,dog]

for(a of creature){
    a.speak()
}


// another example of OOP


class Student{
    constructor(name,id,program){
        this._name = name;
        this._id = id
        this._program = program

    }
    get name(){
        return this._name
    }
    get id(){
        return this._id
    }
    get program(){
        return this._program
    }
    Exam(){
        console.log(`${this._name} must need to pass exams to get degree`)
    }
}

class Bechelor extends Student{
    constructor(name,id,program,semester,gpa){
        super(name,id,program)
        this._semester = semester
        this._gpa = gpa
    }
    get semester(){
        return this._semester
    }
    get gpa(){
        return this._gpa
    }
    Exam(){
        super.Exam()
        console.log(`BS-Software engineering has 8 semester`)
    }
}

class Master extends Student{
    constructor(name,id,program,timePeriod,courses){
        super(name,id,program)
        this._timePeriod = timePeriod
        this._courses = courses
    }
    get timePeriod(){
        return this._timePeriod 
    }
    get courses(){
        return this._courses
    }
    Exam(){
        super.Exam()
        console.log(`master students can go PHD in future`)
    }
}

let Hashim = new Bechelor('Hashim', 3921,'BS-SE','4TH-SEMESTER', 3.2)
let Asim = new Bechelor('Asim', 35496,'BS-SE', '5th-Semester', 3 )
let Akif = new Master('Akif', 29433,'Bs-software', '2.5 yrs', 22)


//polymorphism
let passOuts = [Hashim, Asim, Akif]

for(a of passOuts){
    a.Exam()
}


// another example

class Vehical{
    constructor(type,tyres){
        this._type = type
        this._tyres = tyres
    }
    get type(){
        return this._type
    }
    get tyres(){
        return this._tyres
    }
    info(){
        console.log(`4 tyres Vehicals are better then 3 tyres vehical`)
    }
}
class ThreeWheel extends Vehical{
    constructor(type,tyres,speed){
        super(type,tyres)
        this._speed = speed
    }
    get speed(){
        return this._speed
    }
    info(){
        super.info()
        console.log(`these vehicals are dangerous at high speed`)
    }
}
class FourWheel extends Vehical{
    constructor(type,tyres,seats,model){
        super(type,tyres)
        this._seats = seats
        this._model = model
    }
    get seats(){
        return this._seats
    }
    get model(){
        return this._model
    }
    info(){
        super.info()
        console.log(`The nums of seats depends on the size of the car in fourWheeler`)
    }
}

let rikshaw = new ThreeWheel('passenger-vehical',3,70)
let loader = new ThreeWheel('Loader',3,120)
let fielder = new FourWheel('Personal-Car',4,4,2005)
let sonata = new FourWheel('VIP',4,4,2023)


// polymorphism
let group = [rikshaw, loader, fielder,sonata]

for(a of group){
    a.info()
}




// another example
class MarwatPrograms{
    constructor(personal,universities,organization){
        this._personal = personal
        this._universities = universities
        this._organization = organization
    }
    get personal(){
        return this._personal
    }
    get universities(){
        return this._universities
    }
    get organization(){
        return this._organization
    }

    pro(){
        console.log(`these night parties for just for fun`)
    }
}

class Students extends MarwatPrograms{
    constructor(personal,universities,organization,universityName){
        super(personal,universities,organization)
        this._universityName = universityName
    }
    get universityName(){
        return this._universityName
    }
    pro(){
        super.pro()
        console.log(`University programs are organized by students in universities`)
    }
}

class Society extends MarwatPrograms{
    constructor(personal,universities,organization,societyName){
        super(personal,universities,organization)
        this._societyName = societyName
    }
    get societyName(){
        return this._societyName
    }
    pro(){
        super.pro()
        console.log(`this type of program held by different societies for thier political or some other support`)
    }
}


let studentNight = new Student('not', 'YES','NO','IQRA UNIVERSITY,ISLAMABAD' )
let nightStudy = new Student('No','yes', 'NO', 'QUID-E-AZAM UNIVERSITY')
let lokVirsa = new Society('Yes','NO','YES','PSF-ORGANIZATION')

let funny = [studentNight,nightStudy,lokVirsa]

for(let a of funny){
    a.pro();
}

// let studentNight = new Students('not', 'YES', 'NO', 'IQRA UNIVERSITY, ISLAMABAD');
// let nightStudy = new Students('No', 'yes', 'NO', 'QUID-E-AZAM UNIVERSITY');
// let lokVirsa = new Society('Yes', 'NO', 'YES', 'PSF-ORGANIZATION');

// let funny = [studentNight, nightStudy, lokVirsa];

// for (let a of funny) {
//     a.pro();
// }
