"use strict";

// syntactic sugar 기본 문법을 개선
// 깔끔하게 프로미스를 사용할 수 있는 방법
// 무조건 프로미스를 대체하는 것이 아님

//1. async 써보기
// function fetchUser() {
//     // do network reques in 10secs..

//     return 'ellie'
// }

// const user = fetchUser();

// console.log(user)

//그냥 쓰면 10초동안 작업동안 다른 것 못함

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network reques in 10secs..

//     return resolve("ellie");
//   });
// }

// const user = fetchUser();

// user.then(console.llog);
// console.log(user); // promise pending
// // promise pending resole, reject 호출 안 하면 pending

// async function fetchUser() {
//   return "ellie";
// } // async를 함수 앞에 쓰면, 코드블럭이 promise로 바뀜

// const user = fetchUser();

// user.then(console.log);
// console.log(user); // promise pending

// 2. await
