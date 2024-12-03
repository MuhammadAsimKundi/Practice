//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = [ 'movie1' , 'movie2' , 'moive3' , 'movie4']
    for(i=0; i<movies.length; i++){
        document.querySelector('h2').innerHTML += movies[i]
    }

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]
// nums[0] = nums[0] + 3 we can do with that way but way is very larger . in this method we write all again and again to add the 3 to all element in array
// nums.forEach((x,i) => {
//     nums[i] = x + 3
// })

//Find the average of all the numbers from question three
let sum = 0;
 nums.forEach((x,i) => {
    sum = sum + nums[i]
 })

 console.log(sum / nums.length)  //average is here (60 / 3 = 20)


 for(let i=1;1<=100; i++){
    if(i/1===0){
        console.log('?')
    }
    else{
        console.log('?')
    }
 }