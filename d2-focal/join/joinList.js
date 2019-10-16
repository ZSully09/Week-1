/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = function(array) {
  /// create joinList function the pulls an array
  let newString = "";
  // define a variable that will pull the elements of the array into a string
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      // iterate over the array to the last element
      newString += array[i];
      // add the last element of the array into newString
    } else {
      newString += array[i] + ", ";
      // add all but the last element to newString, seperating them all by a comma
    }
  }
  return newString;
};

const joinList = function(array) {
  /// create joinList function the pulls an array
  let newString = "";
  // define a variable that will pull the elements of the array into a string
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      // iterate over the array to the last element
      newString += array[i];
      // add the last element of the array into newString
    } else {
      newString += array[i] + ", ";
      // add all but the last element to newString, seperating them all by a comma
    }
  }
  return newString;
};

// Test / Driver Code below...
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving"
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

// create a joinList function that pulls the conceptList array into a string, defined as newString
// write a for loop that will iterate over the array pulling each elemenet into a newString, all of which must be seperated by a comma
// however, we must insure the final element does not have a comma as the sentence is finished.

// hi
