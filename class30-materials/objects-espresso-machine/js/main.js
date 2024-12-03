//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class espresso{
    constructor(name,make,model,price){
        this.name = name
        this.make = make
        this.model = model
        this.price = price
    }
    //adding some methodes to class out of constructor

    randomDetails(){
        console.log(`${this.name} of ${this.make} company of ${this.model} has market price of $${this.price}`)
    }

    start(){
        console.log(`${this.name} has been started`)
    }

    stop(){
        console.log(`${this.name} has been stoped now!`)
    }
}

const X = new espresso('X', 'Gagga' ,'2023-model' , 800)
