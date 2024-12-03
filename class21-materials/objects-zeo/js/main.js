//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
stopwatch.time = 12
stopwatch.shape= 'round'
stopwatch.color= 'black'
stopwatch.brand = 'casio'

stopwatch.checkTime = function(time){   
    alert(`the stopwatch time is ${time}`)
}
stopwatch.checkTime(stopwatch.time)

stopwatch.checkShape = function(shape){
    alert(`the stopwatch shape is ${shape}`)
}
stopwatch.checkShape(stopwatch.shape)


stopwatch.checkColor = function(color){
    alert(`the stopwatch color is ${color}`)
}
stopwatch.checkColor(stopwatch.color)


stopwatch.stop= function(){
    alert('stopeeeeeee!')
}