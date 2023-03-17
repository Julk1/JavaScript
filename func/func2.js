
function getDifference(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    }

    return dif = num1 - num2;
}

   console.log(getDifference(10, 5));
   console.log(getDifference('one', 5));
   console.log(getDifference(4, 2));