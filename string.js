/**
 # STRING METHODS
 * @link https://medium.com/@akxay/javascript-string-methods-5588830241ed
 * @description : length, indexOf, includes, slice, concat, toString, at (common for array and string )
 * ----------------------------
 # Basic String Methods
 * charCodeAt()
 * charAt()
 * concat()
 * includes()
 * endsWith()
 * startsWith()
 * indexOf()
 * lastIndexOf()
 * slice()
 * substring()
 * toLowerCase()
 * toUpperCase()
 * trim()
 * trimStart()
 * trimEnd()
 * ----------------------------
 # Intermediate String Methods
 * split()
 * replace()
 * replaceAll()
 * repeat()
 * padStart()
 * padEnd()
 * ----------------------------
 # Advanced String Methods
 * match()
 * search()
 * fromCharCode()
 * codePointAt()
*/

let str = "hello World hello"
let strEnd = "Programmer"
let filename = "javascript.pdf"
let sentence  = " javascript Iam a good programmer and software engineer with javascript knowledge"
let trimstr =" trimspace "
let num = "7"
let value = 2


// 1. charAt()
console.log(str.charAt(7)); //r =>index letter

// 2.charCodeAt()
console.log(str.charCodeAt(5)) //87 => ASCII CODE

// 3. concat()
console.log(str.concat(strEnd)) //helloWorldProgrammer
console.log(str.concat(" ",strEnd,"!!")) //helloWorld Programmer!!

// 4. includes()
console.log(sentence.includes("software")) // true
console.log(sentence.includes("Developer")) //false

//5. startsWith()
console.log(filename.startsWith("javascript",2)) //false
console.log(filename.startsWith("javascript",0)) //true
console.log(filename.startsWith("javascript")) //true

//6. endsWith()
console.log(filename.endsWith("pdf",filename.length) ,"ends") //true  14
console.log(filename.endsWith("pdf",15) ,"") // true (15 > 14)
console.log(filename.endsWith("pdf")) //true

//7. indexOf()
console.log(sentence.indexOf("javascript")); // 1 ( finds first)
console.log(sentence.indexOf("javascript", 10)); // 61 (finds second one) total length 69
console.log(sentence.indexOf("python")); // -1 not find

//8.  lastIndexOf()
console.log(sentence.lastIndexOf("javascript")); // 61 ( finds last)
console.log(sentence.lastIndexOf("javascript", 10)); // 1 (finds second one from last) total length 69
console.log(sentence.indexOf("python")); // -1 not find

//9.  slice()
console.log(filename.slice(0,10)) // javascript (start,end-1) 
console.log(filename.slice(-3)) // pdf from last

//10. substring()
console.log(str.substring(5,10)) //world
console.log(str.substring(5)) //world it start from 0 automatically

//11. length
console.log(sentence.length);

//12. toLowerCase()
console.log(str.toLowerCase());

//13. toUpperCase()
console.log(str.toUpperCase());

//14. toLocaleLowerCase()
// en-US, en-GB, hi-IN, ta-IN, de-DE, tr-TR, fr-FR, es-ES, pt-BR, zh-CN, ja-JP, ko-KR, ru-RU,
console.log(str.toLocaleLowerCase("es-ES"));

//15. toLocaleUpperCase()
// en-US, en-GB, hi-IN, ta-IN, de-DE, tr-TR, fr-FR, es-ES, pt-BR, zh-CN, ja-JP, ko-KR, ru-RU,
console.log(str.toLocaleUpperCase("en-GB"));

//16. trim()
 console.log(trimstr.trim())// trimspace

//17. trimStart()
console.log(trimstr.trimStart())// trimspace   remove space at start

//18. trimEnd()
console.log(trimstr.trimEnd())// trimspace   remove space at end

//19.  split()

// Example 1: Splitting a Sentence into Words
const sent = "JavaScript is fun";
console.log(sent.split(" ")); // Output: ['JavaScript', 'is', 'fun']
console.log(sent.split()); // Output: [ 'JavaScript is fun' ]
console.log(sent.split("")); // Output:['J', 'a', 'v', 'a', 'S','c', 'r', 'i', 'p', 't',' ', 'i', 's', ' ', 'f','u', 'n']
console.log(sent.split(" ",2)); // Output:[ 'JavaScript', 'is' ]

// Example 2: Splitting by a Character
const date = "2024-10-10";
console.log(date.split("-")); // Output: ['2024', '10', '10']

//20. replace()
console.log(str.replace("hello","hi"));// hiWorld hello

//21. replaceAll()
console.log(str.replaceAll("hello","hi"));// hiWorld hi

//22. repeat()
console.log(str.repeat(3));// helloWorld hellohelloWorld hellohelloWorld hello

//23. padStart() 
console.log(num.padStart(3,"0")) //007  first parm denotes string length and second parm denotes which str needs to add in curr string i start.

//24. padEnd()
console.log(num.padEnd(3,"0")) //700 =?first parm denotes string length and second parm denotes which str needs to add in curr string in end .

//25. match()
console.log(str.match(/hello/));//[ 'hello', index: 0, input: 'helloWorld hello', groups: undefined ]

//26. matchAll()
const line = "React and Angular and Vue";
const regex = /\b\w+\b/g;
const matches = [...line.matchAll(regex)];
console.log(matches.map(m => m[0]));  // ["React", "and", "Angular", "and", "Vue"]

//27. search()
console.log(str.search(/World/)); //6 index
console.log(str.search(/python/)); //-1 

//28.  String.fromCharCode()
console.log(String.fromCharCode(65)) //A
console.log(String.fromCharCode(72, 101, 108, 108, 111)) //Hello

//29.  codePointAt(index)
console.log(String.fromCharCode(str.codePointAt(0))) // h
console.log(str.codePointAt(0)) // h=> 104
 
//30. at()
console.log(str.at(0)); // h
console.log(str.at(-1)); // o

//31. toString()
console.log(value.toString()); //1 => "1"

//32. localeCompare()
/**
 * -1 if str comes before compareString
 *  1 if str comes after compareString
 *  0 if both strings are equal
*/
let fruitapple = "apple"
let fruitbanana = "banana"
console.log(fruitapple.localeCompare(fruitapple)); //0
console.log(fruitapple.localeCompare("banana"));  // -1
console.log(fruitbanana.localeCompare("apple"));  // 1

//33. normalize()
const str1 = 'é';                         // composed character
const str2 = 'e\u0301';                   // 'e' + accent (decomposed)
console.log(str1 === str2);               // false (different byte-wise)
console.log(str1.normalize() === str2.normalize()); // true 

//34. valueOf()
const obj = new String(str)
console.log(obj); // typeof object
console.log(obj.valueOf()); //typeof string


