// Fetch API requires a discussion of
// Callbacks, Promises, Thenables, and Async/Await

//#################################################################################
// Callbacks

// function firstFucntion(parameters, callback) {
//   // do stuff
//   callback();
// }

// AKA 'callback hell"

// firstFucntion(para, function(){
//   secondFunction(para, function(){
//     thirdFunction(para, function() {

//     })
//   })
// })
//#################################################################################
// Promises

// 3 states: Pending, Fulfilled, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise!");
//   } else {
//     reject("No rejected the promise");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fetch API does retun a promise

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resloved!");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

//#################################################################################
// const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
// promise is not resolve, it's still working on it
// console.log(users);

//#################################################################################
// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// console.log(users);

//#################################################################################

// Async / Await

// const myUsers = {
//   userList: [],
// };

// // async function myCoolFunction() {

// // }

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// myCoolFunction();

// const anotherFunc = async () => {
//   const data = await myCoolFunction(); // waiting this returns
//   console.log(data); // after that excute console.log(data)
// };

// anotherFunc();

//#################################################################################

// const myUsers = {
//   userList: [],
// };

// // async function myCoolFunction() {

// // }

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   return jsonUserData;
// };

// myCoolFunction();

// const anotherFunc = async () => {
//   const data = await myCoolFunction(); // waiting this returns
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// console.log(myUsers.userList); // [] empty array why?

//#################################################################################
// workflow function

// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });

//   //   console.log(userEmailArray);
//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmails();

//#################################################################################
//2nd parameter of Fetch is a object

// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });

//   const jsonJokeData = await response.json();

//   console.log(jsonJokeData.joke);
// };

// getDadJoke();
// status 200  OK

//#################################################################################

// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "text/plain",
//     },
//   });

//   const textJokeData = await response.text();

//   console.log(textJokeData);
// };

// getDadJoke();

//#################################################################################

// const jokeObject = {
//   id: "21DQnbaaxc",
//   joke: "Whoever invented the knock-knock joke should get a no bell prize.",
// };

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });

//   const jsonResponse = await response.json();

//   console.log(jsonResponse);
// };

// postData(jokeObject);

//#################################################################################

// const requsetJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
//   );

//   const jsonResponse = await response.json();

//   console.log(jsonResponse.value.joke);
// };

// requsetJoke("Clint", "Eastwood");

//#################################################################################

// abstract into functions

// maybe from a form

// const getDataFromForm = () => {
//   const requestObj = {
//     firstName: "Bruce",
//     lastName: "Lee",
//     categories: ["nerdy"],
//   };

//   return requestObj;
// };

// const buildRequestUrl = (requestData) => {
//   return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// };

// const requsetJoke = async (url) => {
//   const response = await fetch(url);

//   const jsonResponse = await response.json();
//   const joke = jsonResponse.value.joke;
//   //   console.log(joke);

//   postJokeTopage(joke);
// };

// const postJokeTopage = (joke) => {
//   console.log(joke);
// };

// // Procedural "workflow" function

// const processJokeRequest = async () => {
//   const requestData = getDataFromForm();
//   const requestUrl = buildRequestUrl(requestData);
//   await requsetJoke(requestUrl);
//   console.log("finished");
// };

// processJokeRequest();
