export function addJS(num1, num2) {
  return num1 + num2;
}

addJS("1", "1");

export function greet(person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Doe" };

console.log(greet(user)); // "Hello, John Doe"
