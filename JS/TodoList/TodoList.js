function checkValidity({ data, isNew }) {
  // setState에서 호출한 경우
  if (arguments[0].isNew === undefined) {
    const data = arguments[0];
    data.every((data) => {
      if (
        typeof data.text !== 'string' ||
        typeof data.isCompleted !== 'boolean'
      ) {
        throw new Error('Invalid Data!!!');
      }
    });
  } else {
    if (!isNew) {
      throw new Error('Function must be declared with "new" keyword!!!');
    }
    if (!Array.isArray(data)) {
      throw new Error('Data type is not an Array!!!');
    }
    data.every((data) => {
      if (
        typeof data.text !== 'string' ||
        typeof data.isCompleted !== 'boolean'
      ) {
        throw new Error('Invalid Data!!!');
      }
    });
  }
}

function TodoList(targetElm, data) {
  checkValidity({ data, isNew: new.target });
  this.state = data;

  this.addTodoArea = document.createElement('div');
  this.inputElm = document.createElement('input');
  this.inputElm.setAttribute('type', 'text');
  this.inputElm.setAttribute('id', 'inputElm');
  this.submitElm = document.createElement('input');
  this.submitElm.setAttribute('type', 'submit');
  this.submitElm.setAttribute('id', 'submitElm');
  this.addTodoArea.appendChild(this.inputElm);
  this.addTodoArea.appendChild(this.submitElm);

  const html = `
    <ul style="list-style: none; padding-left: 0px;">
      ${this.state
        .map(
          ({ text, isCompleted }) =>
            `<li style="background-color:#6667AB; border:1px solid white">
        ${isCompleted ? `<s>${text}</s>` : text}
        <input type="checkbox" style="position:absolute; right:10px;"></li>`
        )
        .join('')}
    </ul>`;

  this.render = function () {
    targetElm.innerHTML = html;
    targetElm.appendChild(this.addTodoArea);
  };
  this.render();

  document.getElementById('submitElm').addEventListener('click', () => {
    const inputData = document.getElementById('inputElm').value;
    console.log(inputData);

    // this.setState(inputTodo.value);
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
