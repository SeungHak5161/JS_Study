import TestExample from "./TestExample.js";
import RecursiveExample from "./RecursiveExample.js";
// import prototypeExample from "./PrototypeExample.js";
import { Person } from "./PrototypeExample.js";
import CallbackExample from "./CallbackExample.js";
import PromiseExample from "./PromiseExample.js";

// const btnEl = document.getElementById(".button");

//----------------------------------------------------------------
// TestExample();

//----------------------------------------------------------------
// console.dir(btnEl);
// let retval = RecursiveExample(btnEl);
// console.log(retval);

//----------------------------------------------------------------
// // prototype은 Person 인스턴스들 간에 공유되는 객체.
// // 따라서 Person.prototype에 할당 된 모든 속성을 공유
// let me = new Person("Baek", "Seunghak");
// console.log(me.fullName());
// console.log(me.fullNameReversed());
// // 또한 아래와 같이 새로운 속성 추가도 가능
// Person.prototype.firstNameCaps = function () {
//   return this.first.toUpperCase();
// };
// console.log(me.firstNameCaps());

// String.prototype.reversed = function () {
//   var r = "";
//   for (var i = this.length - 1; i >= 0; i--) {
//     r += this[i];
//   }
//   return r;
// };
// console.log("This can now be reversed".reversed());

//----------------------------------------------------------------
// callback 구현 없이 사용하면 undefinded 출력
// console.log(`without callback : ${CallbackExample()}`);

// CallbackExample(function (data) {
//   console.log(`with callback : ${data}`);
// });

//----------------------------------------------------------------
PromiseExample()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
