let cnt = 0;
for (let i = 0; i < 10; i++) {
  console.log(i, "번재 실행중");
  cnt++;
}

console.log("cnt", cnt);

const studentList = [
  //첫번째객체
  {
    name: "1장기만",
    mbti: "1ISFJ",
    chk: true,
  },
  //두번째객체
  {
    name: "2장기만",
    mbti: "2ISFJ",
    chk: false,
  },
  //세번째객체
  {
    name: "3장기만",
    mbti: "3ISFJ",
    chk: false,
  },
];

for (let i = 0; i < studentList.length; i++) {
  console.log("name", studentList[i].name);
  console.log("mbti", studentList[i].mbti);
  console.log("chk", studentList[i].chk);
}

//forEach : 배열타입만 사용 가능
const numbers = [2, 4, 5, 6, 7];

numbers.forEach((element, index, array) => {
  console.log("element", element);
  console.log("index", index);
  console.log("array", array);
});

let sandwitch = "🥟";
const ingredients = ["🥕", "🥯", "🥓", "🥚", "🥖"];

ingredients.forEach((item) => {
  console.log("item", item);
  sandwitch += item;
});

console.log("sandwitch", sandwitch);
