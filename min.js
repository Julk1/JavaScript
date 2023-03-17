
const arr1 = [2, 17, 53, 15, 105, 73, -7, 12, 0, 27];

let smallestElem = Number.isNaN(arr1[0]); 


for (let elem of arr1){
   if (elem < smallestElem) {
        smallestElem = elem;
   }
}

console.log(smallestElem);