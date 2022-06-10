import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import { setData, getData } from "./data.js";
import checkValidity from "../Utility/checkValidity.js";

export default function App() {
  const localData = window.localStorage;
  this.state = getData({ localData });

  this.setState = (nextData) => {
    checkValidity(nextData);
    setData({ localData, nextData });
    this.state = nextData;

    todoList.setState(this.state);
    todoCount.setState(this.state);
    todoInput.setState(this.state);
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
    initialState: this.state,
  });
  const todoInput = new TodoInput({
    $target: $addTodo,
    setState: this.setState,
    initialState: this.state,
  });
  const todoCount = new TodoCount({
    $target: $todoCount,
    initialState: this.state,
  });
}
