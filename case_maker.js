let camelCase = function(input) {
  const splitInput = input.split(' ');
  if (splitInput.length === 1) {
    return splitInput[0].toString();
  }
  const array = [];
  for (let i = 1; i < splitInput.length; i++) {
    // console.log(splitInput[i]);
    const first = splitInput[i][0];
    // console.log(first);
    // console.log(first.toUpperCase());
    const newFirst = first.toUpperCase();
    const rest = splitInput[i].slice(1);
    // console.log(rest);
    // console.log(rest.toLowerCase());
    const newRest = rest.toLowerCase();
    // console.log(newFirst + newRest);
    const word = splitInput[0] + newFirst + newRest;
    // console.log(word);
    array.push(word);
  }
  // console.log(array);
  const newString = array.join('');
  // console.log(newArray);

  return newString;
};

console.log(camelCase('this is a string')); // thisIsAString
console.log(camelCase('loopy lighthouse')); // loopyLighthouse
console.log(camelCase('supercalifragalisticexpialidocious')); //supercalifragalisticexpialidocious
