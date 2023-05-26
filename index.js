function isPalindrome(str) {
  // Remove any non-letter characters and convert to lowercase
  str = str.replace(/[^a-z]/g, '').toLowerCase();

  // Compare the string with its reversed version
  return str === str.split('').reverse().join('');
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
