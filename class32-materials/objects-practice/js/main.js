// // Come up with with a parent class
// // Extend that parent class into two children
// // Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }





//another example of oop code
class Contractor{
    constructor(name,area,type){
        this._name= name
        this._area = area
        this._type = type
    }
    get name(){
        return this._name
    }
    get area(){
        return this._area
    }
    get type(){
        return this.type
    }
    work(){
        console.log(`${this._name} contractors are building contractors`)
    }
}
class FrontEnd extends Contractor{
    constructor(name,area,type,style){
        super(name,area,type)
        this._style = style
    }
    get style(){
        return this._style
    }
    work(){
        super.work()
        console.log(`Frontend contractors take care of the style and looks of building`)
    }
}

class BackEnd extends Contractor{
    constructor(name,area,type,structure){
        super(name,area,type)
        this._structure = structure
    }
    get structure(){
        return this._structure
    }
    work(){
        super.work()
        console.log(`BackEnd contractor works on the structure of building`)
    }
}

let mughals = new FrontEnd('Mughal','islamabad','Frontend','Eastren-style')
let empires = new BackEnd('Empires','Islamabad','BackEnd','Cement-bricks')
let james =  new FrontEnd('James & CO.', 'Dubai','Frontend','Modern-Arabic')

//polymorphism

let styloBuild = [mughals,empires,james]

//in the following polymorphism code 'aha' is variable that will hold every element in 'stylobuild' like aha = mughals
for(aha of styloBuild){
    aha.work()
}



//another example of oop code
class Builders{
    constructor(name,area,type){
        this._name= name
        this._area = area
        this._type = type
    }
    get name(){
        return this._name
    }
    get area(){
        return this._area
    }
    get type(){
        return this.type
    }
    work(){
        console.log(`${this._name} contractors are building contractors`)
    }
}
class Design extends Builders{
    constructor(name,area,type,style){
        super(name,area,type)
        this._style = style
    }
    get style(){
        return this._style
    }
    work(){
        super.work()
        console.log(`Frontend contractors take care of the style and looks of building`)
    }
}

class Structure extends Builders{
    constructor(name,area,type,structure){
        super(name,area,type)
        this._structure = structure
    }
    get structure(){
        return this._structure
    }
    work(){
        super.work()
        console.log(`BackEnd contractor works on the structure of building`)
    }
}


let MughalBuilders = new Design('Mughal-Builders','islamabad and Karachi','Designer','Eastren-style')
let EmpireBuilders = new Structure('Empires-Builders','Islamabad & Lahore','InfraStructure','Cement-bricks')
let JamesAndSonsBuilder =  new Design('James & Sons CO.', 'Dubai & islamabad','Designer','Modern-Arabic')

//polymorphism

let infra = [MughalBuilders,EmpireBuilders,JamesAndSonsBuilder]

//in the following polymorphism code 'aha' is variable that will hold every element in 'stylobuild' like aha = mughals
for(aha of infra){
    aha.work()
}