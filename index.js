let a = prompt('Enter the first number', 0);
let b = prompt('Enter the second number', 0);


if (a === '' || b === '') {
    alert('Помилка: має бути введено 2 числа, виконання подальших операцій не можливе!');
  } else {
    alert('Cума' + ' ' + (Number(a) + Number(b)));
  
  if ( a < b ) {
      let message = confirm('Ви впевнені, що хочете продовжити операцію?');
         if (message === true) {
          alert('Різниця' + ' ' + (a - b));
         };
  } else {
    alert('Різниця' + ' ' + (a - b));
  }
  
  alert('Додаток' + ' ' + (a * b));
  
  if (b === '0') {
    alert('Помилка: ділення не можливе!');
  } else {
    alert('Ділення' + ' ' + (a / b));
  }
  
  }
