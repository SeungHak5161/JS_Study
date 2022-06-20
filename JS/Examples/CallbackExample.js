export default function CallbackExample(callbackFunc) {
  const formEl = document.getElementById("form");
  const inputEl = document.getElementById("input");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(inputEl.value);
    callbackFunc(inputEl.value);
  });
}
