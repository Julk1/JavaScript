const user = {
    name: prompt('Як тебе звати?'),
    age: prompt('Скільки тобі років?'),

    sayHello: function() {
    
        alert(message= `Привіт, я ${this.name}, мені ${this.age} років`);
        return `Привіт, я ${this.name}, мені ${this.age} років`;
    }
  };



  console.log(user.sayHello()); // Приклад (Привіт, я John, мені 30 років)
