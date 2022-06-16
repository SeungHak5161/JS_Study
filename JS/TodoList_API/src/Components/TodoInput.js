export default function TodoInput(params) {
  const $target = params.$target;
  const onAdd = params.onAdd;
  this.username = params.username;

  this.render = function () {
    $target.innerHTML = `
      <form id="form-elm">
        <input type="text" id="input-text" placeholder="새 일정 추가"></input>
        <input type="submit" id="submit-btn" value="추가"></input>
      </form>
      `;
  };
  this.render();

  this.setUserName = (newUser) => {
    this.username = newUser;
  };
  document.getElementById("form-elm").addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = document.getElementById("input-text");
    const inputText = $input.value;

    if (inputText.trim().length > 0) {
      const inputData = inputText;
      onAdd(this.username, inputData);

      $input.value = "";
      $input.focus();
    }
  });
}
