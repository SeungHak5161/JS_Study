import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
// import checkValidity from "../Apis/checkValidity.js";
import { fetchAPI } from "../Apis/Api.js";

export default function App() {
  const username = "test123";

  this.state = [];
  this.setState = async () => {
    const updatedData = await fetchAPI({ option: "GET", username: username });
    this.state = updatedData;
    todoList.setState(this.state);
    todoCount.setState(this.state);
  };
  this.setState();
  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");

  const RemoveAll = new CustomEvent("removeAll");

  window.addEventListener("removeAll", async () => {
    await fetchAPI({ option: "REMOVE_ALL", username: username });
    await fetchAPI({
      option: "GET",
      username: username,
    });
    this.setState();
  });
  const todoList = new TodoList({
    $target: $todoList,
    removeEvent: RemoveAll,
    initialState: this.state,
    username: username,
    onClick: async (username, id) => {
      await fetchAPI({
        option: "TOGGLE",
        username: username,
        id: id,
      });
      await fetchAPI({ option: "GET", username: username });
      this.setState();
    },
    onRemove: async (username, id) => {
      await fetchAPI({
        option: "REMOVE",
        username: username,
        id: id,
      });
      await fetchAPI({ option: "GET", username: username });
      this.setState();
    },
  });
  const todoInput = new TodoInput({
    $target: $addTodo,
    initialState: this.state,
    username: username,
    onAdd: async (username, inputData) => {
      fetchAPI({
        option: "ADD",
        username: username,
        inputData: inputData,
      });
      await fetchAPI({ option: "GET", username: username });
      this.setState();
    },
  });
  const todoCount = new TodoCount({
    $target: $todoCount,
    initialState: this.state,
    username: username,
  });
}
