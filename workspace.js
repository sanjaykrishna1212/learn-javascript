let ops = {Add: "Add",sub: "Sub",mul: "Mul",div: "Div",};

function calculateData(type, a, b) {
  try {
    switch (type) {
      case ops.sub:return a - b;
      case ops.mul:return a * b
      case ops.div:return a / b;
      default:return a + b;
    }
  } 
  catch (error) 
  {
    console.error(error.message,"err")
  }
}

const sum = calculateData(ops.Add,1,2)
const sub = calculateData(ops.sub,1,2)
const mul = calculateData(ops.mul,1,2)
const div = calculateData(ops.div,1,2)
    
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
