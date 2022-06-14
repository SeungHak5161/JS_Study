export default function TodoInput(params) {
  const $target = params.$target;
  const onAdd = params.onAdd;
  this.username = params.username;

  this.render = function () {
    $target.innerHTML = `
      <form id="formElm">
        <input type="text" id="inputElm" placeholder="새 일정 추가"></input>
        <input type="submit" id="submitElm" value="추가"></input>
      </form>
      `;
  };
  this.render();

  this.setUserName = (newUser) => {
    this.username = newUser;
  };
  document.getElementById("formElm").addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = document.getElementById("inputElm");
    const inputText = $input.value;

    if (inputText.trim().length > 0) {
      const inputData = inputText;
      onAdd(this.username, inputData);

      $input.value = "";
      $input.focus();
    }
  });
}
