console.log("후츠릿 구독 좋아요");
console.log(2 + 2);

//자바스크립트 주석

//상수
const youtube = "후츠릿";

//변수
let comment = "구독 좋아요";
console.log("🚀 ~ comment:", comment);

console.log("youtube", youtube);

comment = "알림설정";

console.log("🚀 ~ comment:", comment);

const number1 = 1;
const number2 = "1";

console.log(number1);
console.log(number2);

console.log("number1", typeof number1);
console.log("number2", typeof number2);

//boolean의 값 : truem false
const bool = true;
console.log("bool", bool);
console.log("bool", typeof bool);

//null
const empty = null;
console.log("empty", empty);

//undefined
let empty2;
console.log("empty2", empty2);

//이름과 나이를 저장하고 콘솔에 찍기
let nm = "장기만";
let age = "43";

console.log("nm", nm);
console.log("age", age);

//함수
console.log("🤷‍♀️🤷‍♂️🤷‍♀️🤷‍♂️🤦‍♂️🤷‍♀️🤦‍♂️🤦‍♂️🤦‍♀️🤦‍♀️🙌🙌");

/*
function hellowWorld() {
  console.log("hellowWorld");
}
*/

//화살표 함수
const hellowWorld = () => {
  console.log("hellowWorld");
};

hellowWorld();

//이름과 나이를 출력하는 함수
//매개변수(parameter)
const userInfo = (userName, userAge) => {
  console.log("userName : " + userName);
  console.log("userAge : " + userAge);
};

//인자(argument)
userInfo("장기만", 43);

//숫자 개를 받아서 숫자 두개를 더하는 함수 작성

const sumNum = (num1, num2) => {
  const result = num1 + num2;
  console.log(num1 + "+" + num2 + "=" + result);
  return result;
};

let nmb1 = 1;
let nmb2 = 2;
const sum = sumNum(nmb1, nmb2);

//이름을 입력받아 대문자로 출력하는 함수
/*
const fncToUpper = (userNm) => {
  return userNm.toUpperCase()
};
*/

//축약(리턴인자만 가능);
const fncToUpper = (userNm) => userNm.toUpperCase();

console.log("userName : " + fncToUpper("jang kiman"));
