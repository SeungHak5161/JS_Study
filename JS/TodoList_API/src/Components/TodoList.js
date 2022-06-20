export default function TodoList(params) {
  const $target = params.$target;
  const removeEvent = params.removeEvent;
  const initialState = params.initialState;
  const username = params.username;
  const onClick = params.onClick;
  const onRemove = params.onRemove;

  if (!new.target) {
    throw new Error('Function must be declared with "new" keyword!!!');
  }
  this.state = initialState;

  this.render = function () {
    $target.innerHTML = `
    <div class="list-name">Todo List</div>
    <div id="todo-list-div">
      <div class="ul-wrap">
        <div class="sub-list-name">todo</div>
        <ul id="todo-ul">
        ${this.state
          .map(({ content, isCompleted }, index) =>
            isCompleted
              ? ""
              : `<li class="todo-item" draggable="true" data-idx="${index}">
                ${content}
                <input class="del-btn" data-idx="${index}" type="checkbox">
                </li>`
          )
          .join("")}
        </ul>
      </div>
      <div class="ul-wrap">
        <div class="sub-list-name">complete</div>
        <ul id="complete-ul">
          ${this.state
            .map(({ content, isCompleted }, index) =>
              isCompleted
                ? `<li class="todo-item" draggable="true" data-idx="${index}">
                ${content}
                <input class="del-btn" data-idx="${index}" type="checkbox">
                </li>`
                : ""
            )
            .join("")}
        </ul>
      </div>
    </div>
          `;
  };
  this.render();

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };

  $target.addEventListener("click", (e) => {
    const className = e.target.className;
    if (className === "todo-item") {
      const $li = e.target.closest("li");
      const idx = parseInt($li.dataset.idx);
      const id = this.state[idx]._id;
      onClick(username, id);
    } else if (className === "del-btn") {
      const $input = e.target.closest("input");
      const idx = parseInt($input.dataset.idx);
      const id = this.state[idx]._id;
      onRemove(username, id);
    }
  });

  const $removeAll = document.getElementById("remove-all");
  $removeAll.addEventListener("click", () => {
    dispatchEvent(removeEvent);
  });
}
