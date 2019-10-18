function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === 3) {
    return 3;
  }
  return fromN + sum(toN);
}

console.log(sum(3, 7));

module.exports = sum;

/*
Base Case: fromN === 3
Recursive Case: toN <= 7
*/
