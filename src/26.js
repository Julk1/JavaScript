

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
  



function CancelableAccumulator(startingValue) {
    Accumulator.call(this, startingValue);
    this.startingValue = startingValue;
 }

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

CancelableAccumulator.prototype.clear = function() {
  this.value = this.startingValue;
};

