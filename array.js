const dayOfWeeks = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

console.log(dayOfWeeks);
console.log(dayOfWeeks.length);
console.log(`오늘은 ${dayOfWeeks[1]}입니다`);

//객체
const studentInfo = {
  name: "장기만",
  mbti: "ISFJ",
  chk: true,
};

console.log(studentInfo);
console.log(studentInfo["name"]);
console.log(studentInfo.name);
console.log(studentInfo["mbti"]);
console.log(studentInfo.mbti);
console.log(studentInfo["chk"]);
console.log(studentInfo.chk);

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

console.log("name" + studentList[0].name);
console.log("mbti" + studentList[0].mbti);
console.log("chk" + studentList[0].chk);

console.log("name" + studentList[1].name);
console.log("mbti" + studentList[1].mbti);
console.log("chk" + studentList[1].chk);

console.log("name" + studentList[2].name);
console.log("mbti" + studentList[2].mbti);
console.log("chk" + studentList[2].chk);
