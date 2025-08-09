const float= 12.3
const int= 12
const val ="Dev"
const long = 12133243525.232

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_VALUE);//1.7976931348623157e+308

console.log(Number.POSITIVE_INFINITY);//Infinity
console.log(Number.NEGATIVE_INFINITY);//-Infinity

console.log(Number.EPSILON);//2.220446049250313e-16

console.log(Number.isInteger(int));//true

console.log(Number.NaN);//NaN
console.log(isNaN(val));//true
console.log(Number.isNaN("NaN"));//false
console.log(Number.isNaN(undefined))//false
console.log(Number.isNaN({}))//false
console.log(Number.isNaN("blabla"))//false
console.log(Number.isNaN(true))//false
console.log(Number.isNaN(null))//false
console.log(Number.isNaN("37"))//false
console.log(Number.isNaN("37.37"))//false
console.log(Number.isNaN(""))//false
console.log(Number.isNaN(" "))//false

console.log(Number.parseFloat("12.1"));//12.1
console.log(Number.parseInt("12.3"));//12

console.log(Number.isFinite(Number.POSITIVE_INFINITY));//false
console.log(Number.isFinite(Number.MAX_VALUE));//true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));//true


console.log(long.toFixed(1));//12133243525.2
console.log(int.toPrecision(1));//1e+1
console.log(int.toExponential());//1.2e+1
console.log(int.toLocaleString());//12 (string)
console.log(int.toString());//12 (string)
console.log(int.valueOf());//12 (number)

