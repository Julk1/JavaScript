
function getBiggestElem(arr1) {
    let biggestElem = arr1[0];

    for (let i = 0; i < arr1.length; i++) {
      if ( arr1[i] >  biggestElem) {
        biggestElem = arr1[i];
      }
    }

    return biggestElem;
}

console.log(getBiggestElem([2, 25, 53, 250, 105, 73, -11, -10, 0, 35])) 