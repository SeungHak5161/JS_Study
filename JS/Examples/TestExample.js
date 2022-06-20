export default function TestExample() {
  const btnEl = document.getElementById(".button");
  console.log(btnEl);
  btnEl.addEventListener("click", function () {
    document.write("<h1>recEl</h1>");
  });
}
