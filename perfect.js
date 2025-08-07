function isPerfectNumber(number) {
  let sum = 0;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}

// Test it
console.log(isPerfectNumber(6));    // true
// console.log(isPerfectNumber(28));   // true
// console.log(isPerfectNumber(12));   // false
