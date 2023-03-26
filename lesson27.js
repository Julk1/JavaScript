let number1 = prompt('Number1');
let number2 = prompt('Number2');


//  Функція для перевірки на числовий тип
function areNumbers(number1,number2){
    if (isNaN(number1) || isNaN(number2)){
        return 'Arguments are not numbers!';
    } else {
        return false;
    }
}

// Функція для перевірки на порожнє введення
function areEmpty(number1,number2){
    if (number1 === '' || number2 === ''){
        return 'The entered value cannot be empty';
       } else {
        return false;
       }
}

// Функція на встановлення кольору (градація)
function setColor(result, resultElement) {
    if (result < 0 && result >= -10) {
        resultElement.style.color = 'rgb(255, 96, 176)';
    } else if (result < -10 && result >= -100) {
        resultElement.style.color = 'rgb(252, 33, 33)';
    } else if (result < -100 && result >= -1000) {
        resultElement.style.color = 'rgb(199, 10, 10)';
    } else if (result < -1000 && result >= -10000) {
        resultElement.style.color = 'rgb(161, 8, 8)';
    } else if (result < -10000 && result >= -1000000) {
        resultElement.style.color = 'rgb(31, 1, 1)';
    }
}


//  Додавання 
function addition(number1, number2) {
    if(areNumbers(number1, number2)) {
        alert('Arguments are not numbers!');
    }  else if (areEmpty(number1, number2)) {
        alert('The entered value cannot be empty!');
    } else {
        const result = Number(number1) + Number(number2);
        const resultElement = document.getElementById('addition');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
       
        setColor(result, resultElement);
        return result; 
    }
}


// Віднімання
function subtraction(number1,number2) {
    if(areNumbers(number1, number2)) {
        alert('Arguments are not numbers!');
    }  else if (areEmpty(number1, number2)) {
        alert('The entered value cannot be empty!');
    } else if (number1 < number2) {
        let message = confirm('Are you sure you want to continue?');
       if (message === true) {
        const result = number1 - number2;
        const resultElement = document.getElementById('subtraction');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        setColor(result, resultElement);
        return result; 
       } else {
        return 'Operation was cancelled';
       }
    } else {
        const result = number1 - number2;
        const resultElement = document.getElementById('subtraction');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        setColor(result, resultElement);
        return result; 
    }
}

// Множення
function multiplication(number1,number2) {
    if(areNumbers(number1, number2)) {
        alert('Arguments are not numbers!');
    }  else if (areEmpty(number1, number2)) {
        alert('The entered value cannot be empty!');
    } else {
        const result = number1 * number2;
        const resultElement = document.getElementById('multiplication');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        setColor(result, resultElement);
        return result; 
    }
}


// Ділення
function division(number1,number2) {
    
    num2 = Number(number2);

    if(areNumbers(number1, number2)) {
        alert('Arguments are not numbers!');
    }  else if (areEmpty(number1, number2)) {
        alert('The entered value cannot be empty!');
    } else if (number2 === 0) {
        alert('Division is not possible!');
    } else {
        const result = number1 / number2;
        const resultElement = document.getElementById('division');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        setColor(result, resultElement);
        return result; 
    }
}


addition(number1, number2);
subtraction(number1, number2);
multiplication(number1, number2);
division(number1, number2);


// Масиви

function findMin(arr) {
    let min = arr[0];

    for (let elem of arr) {
        if (typeof elem === 'number' && (min === arr[0] || elem < min)) {
            min = elem;
        }
    }  
        const result = min;
        const resultElement = document.getElementById('min');
        resultElement.textContent = result;
        resultElement.style.color = result < 0 ? 'red':'green';
        setColor(result, resultElement);
        return result; 
}


function findMax(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
     if(typeof arr[i] === 'number' && ( max === arr[0] || arr[i] > max)) {
      max = arr[i];
     }
}
    const result = max;
    const resultElement = document.getElementById('max');
    resultElement.textContent = result;
    resultElement.style.color = result < 0 ? 'red':'green';
    setColor(result, resultElement);
    return result; 
}


findMin([36, 20, 7, 20, 'one', -10]);
findMax([45, 25, 7, -3, 'one']);