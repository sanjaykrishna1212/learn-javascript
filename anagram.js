// aabbc abcabc

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }


  for (let char of str2) {
    if (!count[char]) {
      return false; // char not found or count mismatch
    }
    count[char]--;
  }

  return true; // All counts matched
}
// console.log(anagram("aabbcc", "abcabc"));

function CheckAnagram(str1, str2) {
  str1 = str1.trim().toLowerCase().replace("/\s/g","");
  str2 = str2.trim().toLowerCase().replace("/\s/g","");

  console.log(str1);
  console.log(str2);
  
  if (str1.length !== str2.length) {return false;}
  str1  = str1.split("").sort().join("")
  str2  = str2.split("").sort().join("")
  return str1 === str2
}


const ana = CheckAnagram("r ac e", " c  ar e ")
console.log(ana)
