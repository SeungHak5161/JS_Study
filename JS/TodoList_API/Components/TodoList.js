export default function TodoList(params) {
  const $target = params.$target;
  // const setState = params.setState;
  const removeEvent = params.removeEvent;
  const initialState = params.initialState;
  const onClick = params.onClick;
  const onRemove = params.onRemove;

  if (!new.target) {
    throw new Error('Function must be declared with "new" keyword!!!');
  }
  this.state = initialState;

  this.render = function () {
    console.log("re-rendered");
    $target.innerHTML = `<ul id="todoUl">
      ${this.state
        .map(
          ({ content, isCompleted }, index) =>
            `<li class="todoItem" data-idx="${index}">
            ${isCompleted ? `<s>${content}</s>` : content}
            <input class="delBtn" data-idx="${index}" type="checkbox">
            </li>`
        )
        .join("")}
        </ul>
        `;
  };
  this.render();

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };

  $target.addEventListener("click", (e) => {
    const className = e.target.className;
    if (className === "todoItem") {
      const $li = e.target.closest("li");
      const idx = parseInt($li.dataset.idx);
      const id = this.state[idx]._id;
      onClick(id);
      // const changeData = [...this.state];
      // changeData[idx].isCompleted = !changeData[idx].isCompleted;
      // setState(changeData);
    } else if (className === "delBtn") {
      const $input = e.target.closest("input");
      const idx = parseInt($input.dataset.idx);
      const id = this.state[idx]._id;
      onRemove(id);
      // const changeData = [...this.state];
      // changeData.splice(idx, 1);
      // setState(changeData);
    }
  });

  const $removeAll = document.getElementById("remove-all");
  $removeAll.addEventListener("click", () => {
    dispatchEvent(removeEvent);
  });
}
