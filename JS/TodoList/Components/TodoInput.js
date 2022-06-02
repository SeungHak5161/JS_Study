export default function TodoInput($target, addTodo) {
  this.render = function () {
    $target.innerHTML = `
        <input type="text" id="inputElm" placeholder="새 일정 추가"></input>
        <input type="submit" id="submitElm" value="추가"></input>
      `;
  };
  this.render();

  document.getElementById('submitElm').addEventListener('click', (e) => {
    const $input = document.getElementById('inputElm');
    const inputText = $input.value;
    // 정규표현식써서 공백인 경우에도 추가 안 되게 하기
    // 엔터로도 추가되게 하기
    if (inputText !== '') {
      const inputData = {
        text: `${inputText}`,
        isCompleted: false,
      };

      addTodo(inputData);
      $input.value = '';
      $input.focus();
    }
  });
}
