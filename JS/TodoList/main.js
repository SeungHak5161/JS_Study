import App from "./Components/App.js";

const $target = document.getElementById("todo-list");

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

const app = new App({ $target, data });
