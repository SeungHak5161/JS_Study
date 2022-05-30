import checkValidity from "../Utility/checkValidity.js";

export default function TodoList($target, data, deleteTodo) {
  checkValidity({ data, isNew: new.target });
  this.state = data;

  this.ulElm = document.createElement("ul");
  this.ulElm.setAttribute("list-style", "none");
  this.ulElm.setAttribute("padding-left", "0px");
  $target.appendChild(this.ulElm);

  this.render = function () {
    $target.innerHTML = `
      ${this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li class="todoItem" todo_idx="${index}">
              ${isCompleted ? `<s>${text}</s>` : text}
              <input class="delBtn" btn_idx="${index}" type="checkbox">
            </li>`
        )
        .join("")}
    `;
  };
  this.render();

  $target.addEventListener("click", (e) => {
    if (e.target.className === "todoItem") {
      const changeData = [...this.state];
      changeData[e.target.attributes.todo_idx.nodeValue].isCompleted =
        !changeData[e.target.attributes.todo_idx.nodeValue].isCompleted;
      this.setState(changeData);
    } else if (e.target.className === "delBtn") {
      const changeData = [...this.state];
      changeData.splice(e.target.attributes.btn_idx.nodeValue, 1);
      deleteTodo(changeData);
    }
  });

  this.setState = function (nextData) {
    checkValidity(nextData);
    this.state = nextData;
    this.render();
  };
}
