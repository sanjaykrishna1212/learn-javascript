// REGEX

/**
 * /test/  --> search this word in sentence
 * /[]/
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */



let pattern = /[test]/;

let input = "thisising37dks _"

const hastest  = pattern.test(input);

console.log(hastest);
