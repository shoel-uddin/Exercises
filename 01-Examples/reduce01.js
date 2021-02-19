// a histogram (aka a frequency chart)
const vehicles = [
    'car',
    'car',
    'truck',
    'car',
    'truck',
    'roller_skates',
    'semi',
    'truck',
    'semi',
    'car'
];
/*
    {
        car: 4,
        semi: 2,
        'roller skates': 1
        truck: 3,
    }
*/
// const vehicleTypes = vehicles.reduce((obj, v) => {
//     // do we already have obj[v]?
//     // if so, increase the value obj[v] + 1
//     if (obj[v]) {
//         obj[v] = obj[v] + 1;
//     } else {
//         // else, set obj[v] = 1
//         obj[v] = 1;
//     }
//     // then return the updated obj
//     return obj;
// }, {});
const vehicleTypes = vehicles.reduce((obj, v) => (
    obj[v] ? 
        {                   // new object, with:
            ...obj,         // a copy of the existing key/value pairs
            [v]: obj[v] + 1 // with the key [v] whose value is obj[v] + 1
        } 
    : 
        {                   // new object with:
            ...obj,         // a copy of the existing key/value pairs
            [v]: 1          // add a new key [v] with value 1
        }
    ), {});
console.log(vehicleTypes);

