const data = [
  {
    text: "JS 공부하기",
    isCompleted: true,
  },
  {
    text: "JS 복습하기",
    isCompleted: false,
  },
];

const targetElm = document.getElementById("todo-list");
const todoList = new TodoList(targetElm, data);
