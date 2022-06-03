export default function TodoList(
  $target,
  data,
  changeCompleted,
  deleteTodo,
  RemoveAll
) {
  this.state = data;

  this.render = function () {
    $target.innerHTML = `<ul id="todoUl">
      ${this.state
        .map(
          ({ text, isCompleted }, index) =>
            // "data-"(data 속성 이름) 붙이면 나중에 .dataset으로 값을 가져올 수 있음(camelCase로도 가능하다고 함)
            `<li class="todoItem" data-idx="${index}">
              ${isCompleted ? `<s>${text}</s>` : text}
              <input class="delBtn" data-idx="${index}" type="checkbox">
            </li>`
        )
        .join("")}
        </ul>
    `;
  };
  this.render();

  $target.addEventListener("click", (e) => {
    const className = e.target.className;
    if (className === "todoItem") {
      // DOM 노드를 직접 따라하는 것 보다 $li = e.target.closest('li') 사용하는게 깔끔
      const $li = e.target.closest("li");
      // .dataset으로 리턴 받은 값은 string 형이므로 parseInt 해줘야 원하는 결과 나옴
      const idx = parseInt($li.dataset.idx);
      const changeData = [...this.state];
      changeData[idx].isCompleted = !changeData[idx].isCompleted;
      changeCompleted(changeData);
    } else if (className === "delBtn") {
      const $input = e.target.closest("input");
      const idx = parseInt($input.dataset.idx);
      const changeData = [...this.state];
      changeData.splice(idx, 1);
      deleteTodo(changeData);
    }
  });

  const $removeAll = document.getElementById("remove-all");
  $removeAll.addEventListener("click", () => {
    dispatchEvent(RemoveAll);
  });

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };
}
