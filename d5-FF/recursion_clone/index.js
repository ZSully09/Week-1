function sum(fromN, toN) {
  // Sum all the values from fromN up to toN [3 --> 7]
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

// Sum all the values of toN to fromN [ 7 --> 3]

function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);
}

console.log(sum(3, 7));

/*
Base Case: fromN === toN
Recursive Case: toN + sum(fromN, toN - 1)
*/
