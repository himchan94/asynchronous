"use strict";
// JS에서 제공하는 비동기를 간편하게 처리할 수 있도록
//도와주는 Object

// 1. state(상태 기능수행 중인지? 성공? 실패인지?)
// 2. producer(정보를 제공하는),consumer(정보를 소비하는)

//state : pending -> fulfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing sth heavy work (시간이 걸림) network, read files
  console.log("doing something");

  setTimeout(() => {
    // resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers then, catch, finally
promise
  .then((value) => {
    // value값은 Producer 작업 종료 후 resolve 값을 통해서 전달된 값;;
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally"); // 성공이든 실패든 관계없이 작업종료 후 무적권 호출
  });

//promise는 then을 통해서 똑같은 promise를 리턴함;
//그래서 이후에 catch 구문도 실행가능
// promise chainning

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then(
    (num) =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      })
  )
  .then((num) => console.log(num));

//최종소요시간 2초
// then에서 값을 리턴 or 또다른 비동기 리턴가능

// 4. Error Handling
// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("닭"), 1000);
//   });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => 알`), 1000);
//   });

// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 병아리`), 1000);
//   });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//     .then((meal) => console.log(meal));

// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve("닭"), 1000);
//   });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error(`${hen} => 알`)), 1000);
//   });

// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => 병아리`), 1000);
//   });

// getHen() //
//   .then(getEgg)
//   .catch((error) => {
//     return "🧡";
//   })
//   .then(cook)
//   .then(console.log)
//   .catch(console.log);
