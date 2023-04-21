let numArray = [1,205,3,5,8,13,21];

let numArray2 = [2354,42,125,360];

let numArray3 = [218,4,6,8,10,12,14,16];


function minMax (arr) {
let minVal = Math.min(...arr);
let maxVal = Math.max(...arr);

console.log(minVal, maxVal);
};

console.log(minMax(numArray));
console.log(minMax(numArray2));
console.log(minMax(numArray3));