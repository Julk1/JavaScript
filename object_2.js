const user = {
    name: prompt('Як тебе звати?'),
    age: prompt('Скільки тобі років?', 0),
    
    sayHello: function() {
      return `Привіт, я ${this.name}, мені ${this.age} років`;
    }
  };



  console.log(user.sayHello()); // Привіт, я John, мені 30 років
