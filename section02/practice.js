let gazero = {
  name: "가영",
  age: 19,
  gender: "female",
};

const gazeroValues = Object.values(gazero);
console.log(gazeroValues);

for (let i = 0; i < gazeroValues.length; i++) {
  console.log(gazeroValues[i]);
}
