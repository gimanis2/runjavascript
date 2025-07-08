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

//퀴즈
/*
function add(a, b) {
  return a + b;
}
*/

const add = (a, b) => {
  return a + b;
};

// 여기에 화살표 함수로 다시 작성하세요.
console.log(add(5, 3)); // 예상 결과: 8

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a, b) => {
  return a - b;
};

// 함수 테스트
console.log(minus(60, 20)); // 예상 결과: 40

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce("장기만", 43)); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

const orderSandwich = (type) => {
  if (type == "basic" || type == null || type.trim() == "") {
    return "기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  } else if (type == "vegan") {
    return "비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  } else {
    return "기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  }
};

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/
