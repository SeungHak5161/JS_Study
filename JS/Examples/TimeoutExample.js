const numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(`number index ${x}`);
    }, 1000 * x);
  })(i);
}
