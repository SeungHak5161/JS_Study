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

  this.submitElm = document.createElement("input");
  this.submitElm.setAttribute("type", "submit");
  this.submitElm.setAttribute("id", "submitElm");

  this.addTodoArea = document.createElement("div");
  this.addTodoArea.appendChild(this.inputElm);
  this.addTodoArea.appendChild(this.submitElm);

  this.render = function () {
    targetElm.innerHTML = `
      ${this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li class="todoItem" id="li_${index}" style="background-color:#6667AB; border:1px solid white;">
              ${isCompleted ? `<s>${text}</s>` : text}
              <input class="delBtn" id="input_${index}" type="checkbox" style="position:absolute; right:10px;">
            </li>`
        )
        .join("")}
    `;
    targetElm.appendChild(this.addTodoArea);

    //   document.getElementById("submitElm").addEventListener("click", () => {
    //     const inputData = [
    //       ...this.state,
    //       {
    //         text: `${document.getElementById("inputElm").value}`,
    //         isCompleted: false,
    //       },
    //     ];

    //     this.setState(inputData);
    //   });
  };
  this.render();

  // for (let i = 0; i < this.state.length; i++) {
  //   document.getElementById(`li_${i}`).addEventListener("click", (e) => {
  //     // e.target.isCompleted = !e.target.isCompleted;
  //     // console.log(e.target.isCompleted);
  //     console.log(e);
  //   });
  // }
  targetElm.addEventListener("click", (e) => {
    if (e.target.className === "delBtn") {
      console.log("input");
    } else if (e.target.className === "todoItem") {
      console.log("todoItem");
    } else if (e.target.id === "submitElm") {
      const inputElm = document.getElementById("inputElm");
      const inputText = inputElm.value;
      // 정규표현식으로 공백도 포함 안 되게 변경
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

// setTimeout(() => {
//   todoList.setState([
//     {
//       text: 'JS 공부하기',
//       isCompleted: true,
//     },
//     {
//       text: 'JS 복습하기',
//       isCompleted: true,
//     },
//     {
//       text: 'PR 올리기',
//       isCompleted: false,
//     },
//   ]);
// }, 1000);
