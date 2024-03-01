function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false
}

/* 
Nested loops have a Big O Notation of O(n^2).
*/

/* 
pseudocode:

check if any two numbers add up to the target number. if two such numbers
exist, return true; if not, return false.

*/   

/*
  I am writing a function called hasTargetSum that uses nested for loops.
  The outer loop tests if the variable i is less than the length of the 
  array. This loop is responsible for iterating through the array. The inner
  loop is also iterating through the array, but avoiding the same number (i).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
