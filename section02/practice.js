const gazero = {
  name: "가영",
  age: 19,
  say: function () {
    console.log(`헤이 모두들 안녕! 내가 누군지 아늬! ${this.name}이다 !`);
  },
};

console.log("name" in gazero);
console.log("gender" in gazero);
