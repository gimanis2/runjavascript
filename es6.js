//logical operators : 단축 평가 논리 계산법 구현방법

//And
const user = {
  isLoggedIn: true,
  role: "admin",
};

//관리자 페이지 접근 허가
if (user.isLoggedIn && user.role === "admin") {
  console.log("관리자 페이지에 접근 가능");
} else {
  console.log("관리자 페이지에 접근 불가");
}

//Or
//관리자 페이지 접근 허가
if (user.isLoggedIn || user.role === "admin") {
  console.log("관리자 페이지에 접근 가능");
} else {
  console.log("관리자 페이지에 접근 불가");
}

//Not

//Defalut Parameter
