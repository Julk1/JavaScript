
function getProduct(num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
           return 'Arguments are not number type!';
       }
   
       return prod = num1 * num2;
   }

   console.log(getProduct(3, 5));
   console.log(getProduct('one', 5));
   console.log(getProduct(5, true));
