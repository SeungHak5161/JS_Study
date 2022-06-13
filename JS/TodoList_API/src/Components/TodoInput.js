export default function TodoInput(params) {
  const $target = params.$target;
  const initialState = params.initialState;
  const username = params.username;
  const onAdd = params.onAdd;

  this.render = function () {
    $target.innerHTML = `
      <form id="formElm">
        <input type="text" id="inputElm" placeholder="새 일정 추가"></input>
        <input type="submit" id="submitElm" value="추가"></input>
      </form>
      `;
  };
  this.render();

  // this.state = initialState;
  // this.setState = function (nextData) {
  //   this.state = nextData;
  // };

  document.getElementById("formElm").addEventListener("submit", (e) => {
    e.preventDefault();
    const $input = document.getElementById("inputElm");
    const inputText = $input.value;

    if (inputText.trim().length > 0) {
      const inputData = inputText;
      onAdd(username, inputData);

      $input.value = "";
      $input.focus();
    }
  });
}
