const args = process.argv;
console.log(Number(args.slice(2)[0]) + Number(args.slice(2)[1]));

// type node sum.js x y
// where x and y are numbers, in terminal, in order to sum them together.
