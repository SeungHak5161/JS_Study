function checkValidity({ data, isNew }) {
  // setState에서 호출한 경우
  if (arguments[0].isNew === undefined) {
    const data = arguments[0];
    data.every((data) => {
      if (
        typeof data.text !== "string" ||
        typeof data.isCompleted !== "boolean"
      ) {
        throw new Error("Invalid Data!!!");
      }
    });
  } else {
    if (!isNew) {
      throw new Error('Function must be declared with "new" keyword!!!');
    }
    if (!Array.isArray(data)) {
      throw new Error("Data type is not an Array!!!");
    }
    data.every((data) => {
      if (
        typeof data.text !== "string" ||
        typeof data.isCompleted !== "boolean"
      ) {
        throw new Error("Invalid Data!!!");
      }
    });
  }
}

function TodoList(targetElm, data) {
  checkValidity({ data, isNew: new.target });
  this.state = data;

  this.ulElm = document.createElement("ul");
  this.ulElm.setAttribute("list-style", "none");
  this.ulElm.setAttribute("padding-left", "0px");
  targetElm.appendChild(this.ulElm);

  this.inputElm = document.createElement("input");
  this.inputElm.setAttribute("type", "text");
  this.inputElm.setAttribute("id", "inputElm");
  this.inputElm.setAttribute("placeholder", "새 일정 추가");

  this.submitElm = document.createElement("input");
  this.submitElm.setAttribute("type", "submit");
  this.submitElm.setAttribute("id", "submitElm");
  this.submitElm.setAttribute("value", "추가");

  this.addTodoArea = document.createElement("div");
  this.addTodoArea.setAttribute("id", "addTodoArea");
  this.addTodoArea.appendChild(this.inputElm);
  this.addTodoArea.appendChild(this.submitElm);

  this.render = function () {
    targetElm.innerHTML = `
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
    targetElm.appendChild(this.addTodoArea);
  };
  this.render();

  targetElm.addEventListener("click", (e) => {
    if (e.target.className === "todoItem") {
      const changeData = [...this.state];
      changeData[e.target.attributes.todo_idx.nodeValue].isCompleted =
        !changeData[e.target.attributes.todo_idx.nodeValue].isCompleted;
      this.setState(changeData);
    } else if (e.target.className === "delBtn") {
      const changeData = [...this.state];
      changeData.splice(e.target.attributes.btn_idx.nodeValue, 1);
      this.setState(changeData);
    } else if (e.target.id === "submitElm") {
      const inputElm = document.getElementById("inputElm");
      const inputText = inputElm.value;
      // 정규표현식써서 공백인 경우에도 추가 안 되게 하기
      if (inputText !== "") {
        console.log("submit");
        const inputData = [
          ...this.state,
          {
            text: `${inputText}`,
            isCompleted: false,
          },
        ];
        this.setState(inputData);
        inputElm.value = "";
      }
    }
  });

  this.setState = function (nextData) {
    checkValidity(nextData);
    this.state = nextData;
    this.render();
  };
}
