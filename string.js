//Length of last word in given String
    let str ="Hello world";
    let str1 ="fly me to the moon";

//Last word length using slice 
    console.log("last word in given string length is:\t" +str.slice(6).length);
//Last word using split
    console.log("last word in given string length is:\t" +str1.trim().split(" ").at(-1).length);


//anagram string compare 
function isanagram(str1,str2)
{
  const strs1 =  str1.replace(/\s+/g, "").toLowerCase();
  const strs2 =  str2.replace(/\s+/g, "").toLowerCase();

  if (strs1.length != strs2.length) return false;
  const charCount = {};
  // Count letters in first string
  for (let char of strs1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract letters using second string
  for (let char of strs2) {
    if (!charCount[char]) return false; // Letter missing or extra
    charCount[char]--;
  }
return true;
} 
console.log(isanagram('listen', 'silent'));
console.log(isanagram('hello', 'world'));  