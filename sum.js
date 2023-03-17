
const arr = [
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

let sum = 0;

for ( let elem of arr ) {
   if (typeof elem === 'number') {
    sum += elem;
   }
}

console.log(sum);