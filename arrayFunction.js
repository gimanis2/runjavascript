//자주 쓰는 배열함수

const names = ["alice", "alice2", "bob", "chutzrit"];
console.log(names);

//map : 기존 배열을 가공해서 새로운 배열을 리턴
/*
const upperNames = names.map((name) => {
  return name.toUpperCase() + "😍";
});
*/

const upperNames = names.map((name) => name.toUpperCase() + "😍");
console.log(upperNames);

//filter : 조건에 부합하는 배열을 리턴
const filertNames = names.filter((name) => name.startsWith("a"));
console.log(filertNames);

//find : 조건에 부함하는 하나의 요소 또는 undefined 리턴
const findName = names.find((name) => typeof name === "string");
console.log(findName);

//some : 조건에 부합하는 요소가 하나라도 있다면 true 리턴
const chk1 = names.some((name) => name.length > 5);
console.log(chk1);

//every : 모든 요서가 조건에 부합해야 true 리턴
const chk2 = names.every((name) => name.length > 5);
console.log(chk2);
