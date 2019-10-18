// sumToOne function using a loop:
// function sumToOne(n) {
//   let sum = 0;
//   for (let i = n; i >= 1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumToOne(4));

/*
Converting to Recursion:
Base Case: n === 1.
Resursive Case: n > 1
*/

//Implement the base case:
function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
  // Imnplement Recursive Case:
  return n + sumToOne(n - 1);
}
// console.log(sumToOne(1));    test 1(confirm returns 1 when n = 1)
console.log(sumToOne(4));
console.log(sumToOne(5));

/*
When n = 4: the result is equivalent to 4 + 3 + 2 + 1 = 10.
When n = 5: the result is equivalent to 5 + 4 + 3 + 2 + 1 = 15
*/
