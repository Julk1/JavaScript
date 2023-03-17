
function getSum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Arguments are not number type!';
    }

    return sum = num1 + num2;
}

console.log(getSum(10, 5));
console.log(getSum('one', 5));
console.log(getSum(4, true));