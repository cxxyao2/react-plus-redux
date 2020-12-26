const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
//  const updated = Object.assign({}, person, { name: "Bob", age: 12 });
const updated = {
  ...person,
  address: {
    ...person.address,
    country: "China",
  },
  age: 34,
};

console.log(updated);
console.log(person);
