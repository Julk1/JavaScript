// Масив об'єктів;
const person = [
    { name: "Olga", age: 34 },
    { name: "Anna", age: 52 },
    {},
    { name: "Jack", age: 12 },
  ]

  const isObjectEmpty = function (obj) {
    return Object.keys(obj).length === 0;
  }

  //Об'єкт 
  const obj = {};


  // Перевірки
  let res = isObjectEmpty({});
  console.log(res);
  
  res = isObjectEmpty({ name: "Anna", age: 52 });
  console.log(res);

  res = isObjectEmpty(obj);
  console.log(res)