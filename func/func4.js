
function getDivision(num1, num2) {

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'One of arguments is not a number type';
    } else if ( num2 === 0) {
        return 'Division is not possible!';
    }

    return div = num1/num2;
}

   console.log(getDivision(20, 5));
   console.log(getDivision('one', 5));
   console.log(getDivision(6, 0));