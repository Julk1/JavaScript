const calc = {
    num1: 0,
    num2: 0,
    ask() {
     this.num1 = Number(prompt('Введіть перше число'));
     this.num2 = Number(prompt('Введіть друге число'));
    },
     sum() { 
            if(isNaN(this.num1) || isNaN(this.num2)) {
                alert('Введені дані не є числами!')
            } else if(this.num1 == '' || this.num2 == '') {
               alert('Поле не може бути порожнім!');
            } else {
                alert( 'Сума введених чисел: ' + (this.num1 + this.num2));
                }
            console.log(`Сума чисел: ${this.num1 + this.num2}`);
                 },
    mul() {
            if(isNaN(this.num1) || isNaN(this.num2)) {
                alert('Введені дані не є числами!')
            } else if(this.num1 == '' || this.num2 == '') {
                alert('Поле не може бути порожнім!');
            } else {
           alert( 'Добуток введених чисел: ' + this.num1 * this.num2);
            };

         console.log(`Добуток чисел: ${this.num1 * this.num2}`);
         }, 
}

calc.ask() // запитує два числа у користувача
calc.sum() // виводить суму введених чисел
calc.mul() // виводить добуток введених чисел