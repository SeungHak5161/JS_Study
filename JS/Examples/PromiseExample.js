export default function PromiseExample() {
  return new Promise(function (resolve, reject) {
    let data = 19970923;
    if (data) {
      resolve(data);
    }
    reject(new Error("Request failed"));
  });
}

// new Promise(function(resolve, reject){
//   setTimeout(function() {
//     resolve(1);
//   }, 2000);
// })
// .then(function(result) {
//   console.log(result); // 1
//   return result + 10;
// })
// .then(function(result) {
//   console.log(result); // 11
//   return result + 20;
// })
// .then(function(result) {
//   console.log(result); // 31
// });
