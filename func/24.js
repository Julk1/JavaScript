function getSum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Arguments are not number type!';
    }

    return sum = num1 + num2;
}

function getDifference(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    }

    return dif = num1 - num2;
}

function getProduct(num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
           return 'Arguments are not number type!';
       }
   
       return prod = num1 * num2;
   }

   function getDivision(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    } else if ( num2 === 0) {
        return 'Division is not possible!';
    }

    return div = num1/num2;
}

function getSmallestElem(arr) {
    
    let smallestElem = arr[0];

    for (let elem of arr){
        if (elem < smallestElem) {
            smallestElem = elem;
        }
    }
    
    return smallestElem;
}

function getBiggestElem(arr1) {
    let biggestElem = arr1[0];

    for (let i = 0; i < arr1.length; i++) {
      if ( arr1[i] >  biggestElem) {
        biggestElem = arr1[i];
      }
    }

    return biggestElem;
}