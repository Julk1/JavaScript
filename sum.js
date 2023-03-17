
const arr = [2, 17, 53, 15, 105, 73, -7, 12, 0, 27];

let sum = 0;

for ( let elem of arr ) {
   if (typeof elem === 'number') {
    sum += elem;
   }
}

console.log(sum);