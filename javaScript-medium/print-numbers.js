// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:

function printNumber(start,end ){
    for (i= start; i<=end ;i++)
    console.log(i)
}

printNumber( 1, 10)


let i = 0;
let sum = 0;
while (i <= 10){
    sum+= i;
    console.log(sum)
    i++;
}