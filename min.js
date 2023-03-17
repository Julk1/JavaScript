
const arr1 = [
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

let smallestElem = Number.isNaN(arr1[0]); 


for (let elem of arr1){
   if (elem < smallestElem) {
        smallestElem = elem;
   }
}

console.log(smallestElem);