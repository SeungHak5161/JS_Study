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
    onClick: async function (id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: "PUT",
      });

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
    onRemove: async function (id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: "DELETE",
      });

      // 데이터 추가 후 서버에서 목록 다시 불러서 다시 그리기
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
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
