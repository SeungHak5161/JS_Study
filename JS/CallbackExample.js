export default function CallbackExample() {
  const formEl = document.getElementById("form");
  const inputEl = document.getElementById("input");
  // let input = prompt("Message");
  // btnEl.addEventListener("click", function () {
  // });
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(inputEl.value);
  });
  function print(input) {
    console.log(`<h1>input : ${input}<h1>`);
  }
  print(inputEl.value);
}
