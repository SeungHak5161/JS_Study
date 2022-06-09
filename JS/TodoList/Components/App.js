import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import { setData, getData } from "./data.js";
import checkValidity from "../Utility/checkValidity.js";

// storage에 key설정 알아보기 -> 이유 못들었음 다시 듣기
export default function App() {
  this.setState = (nextData) => {
    checkValidity(nextData);
    setData(nextData);
    todoList.setState(nextData);
    todoCount.setState(nextData);
  };

  this.changeCompleted = (nextData) => {
    this.setState(nextData);
  };

  this.addTodo = (newTodo) => {
    this.setState([...getData(), newTodo]);
  };

  this.deleteTodo = (nextData) => {
    this.setState(nextData);
  };

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");

  const RemoveAll = new CustomEvent("removeAll");

  window.addEventListener("removeAll", () => {
    this.setState([]);
  });

  const todoList = new TodoList({
    $target: $todoList,
    setState: this.setState,
    removeEvent: RemoveAll,
  });
  const todoInput = new TodoInput({
    $target: $addTodo,
    setState: this.setState,
  });
  const todoCount = new TodoCount({ $target: $todoCount });
}
