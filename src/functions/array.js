const numbers = [1, 2, 3];

const added = [4, ...numbers];
const added2 = [...numbers, 5];
console.log("aa", added);
console.log("aa2", added2);

// Insert a number before 2
const index = numbers.indexOf(2);
const added3 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log("aa3", added3);

// Removing
const removed = numbers.filter((n) => n !== 2); //[1,3]

// Updating
const updated = numbers.map((n) => (n === 2 ? 20 : n));
console.log("update is", updated);
