//CODE 01
// //Make an api request using sync
// function houseOne(){
//     console.log('paper deliverd to house 1')
// }

// function houseTwo(){
//     console.log('paper deliverd to house 2')
// }

// function houseThree(){
//     console.log('paper deliverd to house 2')
// }

// houseOne()
// houseTwo()
// houseThree()



// CODE 02


// //Make web api using async await
// //house 1 will shown 3 seconds late because of sending request to web api and js will goes to house2
// function houseOnee(){
//     setTimeout(()=>console.log('paper deliverd to house 1'),3000)
// }
// //house 2 will also be shown late because of only sending request to web api . js will block it show the third house at first
// function houseTwoo(){
//     setTimeout(()=>console.log('paper deliverd to house 2'))
// }

// function houseThreee(){
//     console.log('paper deliverd to house 3')
// }

// houseOnee()
// houseTwoo()
// houseThreee()


//CODE 03



// function houseOnee(){
//     console.log('paper deliverd to house 1')
// }
// function houseTwoo(callback){
//     setTimeout(()=>{
//         console.log('paper deliverd to house 2')
//         callback()
//     },3000)
// }

// function houseThreee(){
//     console.log('paper deliverd to house 3')
// }

// houseOnee()
// houseTwoo(houseThreee)



// CODE  04

// function houseOne(){
//     setTimeout(()=>{
//         console.log(`paper diliverd to house 1`)
//         setTimeout(()=>{
//             console.log(`paper diliverd to house 2`)
//             setTimeout(()=>{
//                 console.log(`paper diliverd to house 3`)
                
//             },3000)
//         },4000)
//     },5000)
// }

// houseOne()

//CODE 05 
//USING PROMISES RATHAR THEN CALLBACKS BECAUSE IT's good when troubleshooting then callbacks

// function houseOne(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Paper delivered to house 01`)
//         },1000)
//     })
// }

// function houseTwo(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Paper delivered to house 02`)
//         },3000)
//     })
// }

// function houseThree(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Paper deliverd to house 03`)
//         },5000)
//     })
// }

// houseOne()
//     .then(data => console.log(data))
//     .then(houseTwo)
//     .then(data => console.log(data))
//     .then(houseThree)
//     .then(data=> console.log(data))


//code 06

//making async code to be look like synch code // little bit of syntactical suggar on top of promises

function houseOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Paper deliverd at house no 01`)
        })
    })
}

function houseTwo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`paper dileverd to house no 02`)
        },5000)
    })
}

function houseThree(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`paper diliverd to house no 03`)
        })
    },3000)
}

async function delivery(){
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}

delivery()