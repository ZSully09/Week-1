function printItems(array) {
  array.forEach(item => {
    // Recursive Case
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    }
    // Base Case
    else {
      console.log(item);
    }
  });
}
// const array = ["😎", "💩", "🤗", "😼", "😂"]; test 1
// const array = ["😎", ["💩", "🤗"], "😼", "😂"]; test 2
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
