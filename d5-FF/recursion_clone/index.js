function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // Add base Case
  if (fromN === toN) {
    return fromN;
  }
  // Add Recursive Case
  return fromN + sum(fromN + 1, toN);
}

console.log(sum(3, 7));

module.exports = sum;

/*
Base Case: fromN === toN
Recursive Case: fromN + sum(fromN + 1, toN)
*/
