// Make password.js take in a single string as a command line argument and print out an obfuscated version of that password, using the rules defined below.

const args = process.argv;
// create a variable to retrieve the arguement
const obfuscate = function(string) {
  // create function obfuscate
  var newPassword = "";
  // create a variable that is an empty string
  for (var i = 0; i < string.length; i++) {
    // iterate over the string to replace the characters
    if (string[i] === "a") {
      newPassword += "4";
    } else if (string[i] === "e") {
      newPassword += "3";
    } else if (string[i] === "o") {
      newPassword += "0";
    } else if (string[i] === "l") {
      newPassword += "1";
    } else {
      newPassword += string[i];
      // add the characters from the string that are not replaced due to the above conditions
    }
  }
  return newPassword;
};

console.log(obfuscate(args[2]));
// return the obfuscate function given the arguement (string parameter), beginning at index = 2 (so it only returns the given parameter typed in terminal without the location of the node and password.js file)
