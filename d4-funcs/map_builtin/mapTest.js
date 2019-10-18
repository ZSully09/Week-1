// Use the map method on lighthouses so that we instead see an array of numbers.

const lighthouses = [
  "Gibraltar Point",
  "Peggy's Point",
  "Cove Island",
  "Discovery Island",
  "Cape Scott",
  "Point Clark",
  "Kincardine"
];
// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
const charCount = lighthouses.map(lh => lh.length);
console.log(charCount);

// test
