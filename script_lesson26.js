// Конструктор Accumulator

function Accumulator(startingValue) {

    if (typeof startingValue !== "number") {
        throw new Error("Value must be a number");
      }

    this.value = startingValue;

}
  
    Accumulator.prototype.increment = function(){
      this.value++;
    };
  
    Accumulator.prototype.decrement = function() {
      this.value--;
    };
  


  var accumulator = new Accumulator(5);
  console.log(accumulator.value); // виведе 5

  accumulator.increment();
  console.log(accumulator.value); // виведе 6

  accumulator.decrement();
  console.log(accumulator.value); // виведе 5


// Конструктор CancelableAccumulator

function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
 }

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
  this.value = this.startingValue;
};

var cancelableAccumulator = new CancelableAccumulator(4);
console.log(cancelableAccumulator.value); // виведе 4

cancelableAccumulator.increment();
console.log(cancelableAccumulator.value); // виведе 5

cancelableAccumulator.clear();
console.log(cancelableAccumulator.value); // виведе 4

  