
const arr2 = [
    2, 
    25, 
    53, 
    200, 
    105, 
    73, 
    -9, 
    -10, 
     0, 
     35
];

let biggestElem = Number.isNaN(arr2[0]);

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > biggestElem) {
        biggestElem = arr2[i];
    }
}

console.log(biggestElem);