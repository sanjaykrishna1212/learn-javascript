// console.log( isNaN(1))
// console.log( isFinite())


/**
 * Hoistng 
 */

// var data 
// console.log(data);
let data 
data=10


function greet(a){
    return function(b){
        console.log("hello",a,"from",b) 
    }
}
// greet("sanjay")("kovilpatti")

data = a=>b=>c => a+b+c

// console.log(data(1)(2)(3));

function secret() {
  let privateData = "hidden";
  return {
    get: () => privateData,
    set: (val) => { privateData = val; }
  };
}

const obj = secret();
console.log(obj.get()); // hidden
obj.set("revealed");
console.log(obj.get()); // revealed

