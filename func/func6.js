
function getBiggestElem(arr) {
    let biggestElem = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] >  biggestElem) {
        biggestElem = arr[i];
      }
    }

    return biggestElem;
}

console.log(getBiggestElem([2, 25, 53, 250, 105, 73, -11, -10, 0, 35])) 