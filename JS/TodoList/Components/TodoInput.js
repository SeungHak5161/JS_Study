import { getData } from "./data.js";

export default function TodoInput({ $target, setState }) {
  this.render = function () {
    $target.innerHTML = `
      <form id="formElm">
        <input type="text" id="inputElm" placeholder="새 일정 추가"></input>
        <input type="submit" id="submitElm" value="추가"></input>
      </form>
      `;
  };
  this.render();

  // 엔터를 사용해서 이벤트를 발생시키려면, input태그를 form태그로 감싸고 "submit" 이벤트를 사용해야 함
  document.getElementById("formElm").addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = document.getElementById("inputElm");
    const inputText = $input.value;

    // inputText.trim() -> 공백 제거 (대체가능)
    if (inputText.trim().length > 0) {
      const inputData = {
        text: `${inputText}`,
        isCompleted: false,
      };

      setState([...getData(), inputData]);
      $input.value = "";
      $input.focus();
    }
  });
}
