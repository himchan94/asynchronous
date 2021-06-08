"use strict";

// JS is synchronous
// 호이스팅 이후 동기적으로 작동
// 호이스팅 : var, function의 선언들이 제일 위로 올라가는 것

// console.log("1");
// setTimeout(function () {
//   console.log("2");
// }, 1000);

// console.log("3");

// 1 3 2
// 제일 먼저 1출력, setTimeout 브라우저 api 1초 뒤 실행해~
// 응답을 기다리지 않고 바로 3출력
// 1초 시간이후 콜백함수 실행

// 콜백은 항상 비동기일때만 쓰나요??

// Synchronous callback 동기 콜백함수

// function printImmediately(print) {
//   print();
// }

// printImmediately(() => {
//   console.log("hello");
// });

// Asynchromous callback 비동기 콜백함수

// function printWithDelay(print, timeout) {
//   setTimeout(print, timeout);
// }

// printWithDelay(() => {
//   console.log("async callback");
// }, 2000);

// 언어들마다 콜백을 지원하는 형식은 다 다름
// JS는 이런 식으로 콜백지원해준다.

// 콜백지옥 콜백에서 콜백을 부르고 부르고 부르면...
// 콜백지험 체험

// Callback Hell

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name} You have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 가독성이 떨어진다
