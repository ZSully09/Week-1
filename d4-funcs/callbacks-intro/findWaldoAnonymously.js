const findWaldo = (names, found) => {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i, name);
    }
  });
};

// Refactor the code such that the callback is anonymous
// const actionWhenFound = function(index, name) {
//   console.log(`Found ${name} at index ${index}!`);
// };
// Take it one step further and remove 'function' entirely

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (index, name) => {
  console.log(`Found ${name} at index ${index}!`);
});
