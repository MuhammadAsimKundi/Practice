//we are making stopwatch here
function StopWatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if(running)
        throw new Error('Stop-watch is already started')
    running = true;

    startTime = new Date()

    }

    this.stop= function(){
        if(!running)
        throw new Error('Stop watch is stoped')
    
    running= flase;

    endTime= new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset = function(){
            startTime = null;
            endTime= null;
            running = null;
            duration = null;
    }
   // looooking suspecios
     Object.defineProperty(this , 'duration' , {

         get : function(){return duration}
    })
}


// practicing again 


// function StopWatch(){
//     let startTime, endTime , running , duration = 0;

//     this.start= function(){
//         if(running)
//         throw new Error('Stop-Watch has been already Started Dear!');
//     running= true;

//     startTime = new Date();
//     }

//     this.stop= function(){
//         if(!running)
//         throw new Error('Stop-watch is not started yet');
//     running= false;

//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//     duration += seconds;
//     }

//     this.reset = function(){
//         startTime = null;
//         endTime= null;
//         running = null;
//         duration = null;
//     }

// // looooking suspecios
//     Object.defineProperty(this , 'duration' , {

//         get : function(){return duration}
//     })
// }


//abstraction 

class Dogs{
    constructor(name, breed, color,hairy){
        this.name = name
        this.breed = breed
        this.color = color
        this.hairy = hairy

        //this will not be shown to users because this is abstracted and user will only see necassary data
        let looks = function(){
            console.log(`${this.breed}-breed Dogs are very good-looking and smart`)
        }
    }
    sound(){
        console.log(`${this.color} ${this.name} of ${this.breed} breed barks very loundly`)
    }
    health(){
        console.log(`${this.color} ${this.name} of ${this.breed} breed health are not good at warm Condition`)
    }
}

let tom = new Dogs('tomy' , 'shephered' , 'brownish-black' , 'yes')

//another example of abstraction

class SalaryReciept {
    constructor(name, hours , rate , tax){
        this.name = name
        this.hours = hours
        this.rate = rate
        this.tax = tax
        let TaxCal = function(){
            console.log(`your tax is ${ ((this.hours * this.rate) / 100) * this.tax}`)
        }
        let benefits = function(){
            console.log(`Company total benefits is ${this.rate * this.hours *(1-TaxCal)}`)
        }
    }
    
    Invoice(){
        console.log(`your total invoice is ${this.rate * this.hours} `)
    }
   
}

const labourOne = new SalaryReciept('Jabbar', 6 , 15 , 25)