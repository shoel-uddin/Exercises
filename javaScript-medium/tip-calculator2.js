// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.


let good = .2
let fair = .15
let bad = .1

function totalAmount (total , rate){
    console.log ('Total amount', ':', total += total * rate)
}

totalAmount (100, good)
totalAmount (50, fair)
totalAmount (60, bad)