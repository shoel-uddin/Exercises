// let size = 5;
// let i;


// for(i = 0; i < size; i++) {
//     console.log ("*****");
//     if (size === i){ 
//         console.log (""); 
// }
// }

// num = int(5)
// for i in range (num):
//     for j in range (num):
//         print ("*", end = " ")
//     print (" ")

// for(let i = 1; i <= 5; i++) {
//     console.log("*");
//     for(let j = 1; j<= i; j++) {
//         console.log(" ");
//         }
//     }

const printSquare = function (v){
    let s= '-'.repeat(v)+ '\n'
    console.log(s.repeat(v))
}
printSquare(4)