// summing an array of numbers
const numbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
let result = 0;
for (let n of numbers) {
    result += n;
}
// console.log(result);
// args:
// - a function that receives the cumulative value and the "current" value
// - the "starter" value (optional)
// const r2 = numbers.reduce((tally, current) => {
//     console.log(`tally: ${tally}, current val: ${current}`);
//     return tally + current;
// }, 0);
// const r2 = numbers.reduce((tally, current) => {
//     console.log(`tally: ${tally}, current val: ${current}`);
//     // sum only odd numbers
//     if (current % 2 !== 0) {
//         return tally + current;
//     } else {
//         console.log('skipping even number');
//         return tally;
//     }
// }, 0);
// now, with more ternary!
const r2 = numbers.reduce((tally, current) => current % 2 !== 0 ? tally + current : tally, 0);
console.log(r2);