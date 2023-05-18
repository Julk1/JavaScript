Array.prototype.pow = function(n) {

    const arr = [];

    for (let i=0; i< this.length; i++) {
        ar.push (Math.pow(this[i],n));

    }

   return arr;
}

const arr[1,2,3];
const res = arr.pow(2);
console.log(res);

function a() {
    alert('test');
}

Function.prototype.defer = function(n) {
    let func=this;
    setTimeout(function(){
        func();
    }, n);
};

a.defer(1000);
