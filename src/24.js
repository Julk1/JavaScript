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

function findMin(arr) {
    let min = arr[0];

    for (let elem of arr) {
        if (typeof elem === 'number' && (min === arr[0] || elem < min)) {
            min = elem;
        }
    }
    return min;
}


function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
     if(typeof arr[i] === 'number' && ( max === arr[0] || arr[i] > max)) {
      max = arr[i];
     }
}
   return max;
}