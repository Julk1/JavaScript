
function getSmallestElem(arr) {
    
    let smallestElem = arr[0];

    for (let elem of arr){
        if (elem < smallestElem) {
            smallestElem = elem;
        }
    }
    
    return smallestElem;
}

console.log(getSmallestElem([2, 44, 53, 250, 105, 73, -11, 10, 0, 35]))