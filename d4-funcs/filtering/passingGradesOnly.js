/* Given the following grades:
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
Write code to filter this down to only passing grades (70 and above)

Tips:
Use the Array filter function (as shown previously) to print out only the passing grades.
Start by declaring the callback function and then later refactor it to be inline and anonymous, or start with an anonymous function to begin with.
Convert the anonymous function into an arrow function in order to get some practice with them.

Step 1


const passingGrades = function(grade) {
  return grade >= 70;
};
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35].filter(
  passingGrades
);
console.log(grades);


// Step 2

const passingGrades = grade => grade >= 70;
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35].filter(
  passingGrades
);
console.log(grades);
*/

// Step 3
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35].filter(
  grade => grade >= 70
);
console.log(grades);
