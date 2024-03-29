// Exercise 1: Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

//Exercise 2: Refactor the function findWaldo to use the forEach() method instead of a for loop.

// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i, name); // execute callback
  //   }
  // }
  // ===========
  // const perPerson = function(name, i) {
  //   if (name === "Waldo") {
  //     found(i, name);
  //   }
  // }
  // names.forEach(perPerson);
  // ============
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i, name);
    }
  });
};
// Adjust callback function to receive and use the index
const actionWhenFound = function(index, name) {
  // log "Found Waldo at index 2!"
  console.log(`Found ${name} at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
