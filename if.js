//요구사항 : score값이 60점 이상이면 '합격' 통지

const score = 40;
const pass = () => {
  return console.log("합격");
};

const fail = () => {
  return console.log("불합격");
};

if (score >= 60) {
  pass();
} else {
  fail();
}

//점수에 따라 등급 지정
/*
 * 90점 이상 : A등급
 * 80점 이상 : B등급
 * 70점 이상 : C등급
 * 70점 미만 : D등급
 */

if (score >= 90 && score <= 100) {
  console.log("A등급");
} else if (score >= 80 && score < 90) {
  console.log("B등급");
} else if (score >= 70 && score < 80) {
  console.log("C등급");
} else {
  console.log("D등급");
}

console.log(`점수는 ${score} 입니다`);

//삼항연산자
const msg = score >= 90 ? pass() : fail();
console.log("msg : " + msg);

//배열
