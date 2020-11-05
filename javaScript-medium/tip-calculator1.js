// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%


let good = .2
let fair = .15
let bad = .1

function tipAmount (total , rate){
    console.log ('Tip amount', ':' , total * rate)
}

tipAmount (100, good)
tipAmount (50, fair)
tipAmount (60, bad)


// function tipAmount (total , service){
//     if (service == "good") {
//         tip = total * 0.2;
//     }else if (service == 'fair'){
//         tip = total * 0.15;
//     }else if ( service == 'bad'){
//         tip = total * .10;
//     }
//     console.log(`Tip Amount is ${tip}`)
// }

// tipAmount (100, "good")

