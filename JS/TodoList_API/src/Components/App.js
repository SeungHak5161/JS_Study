import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import checkValidity from "../Apis/checkValidity.js";
import { fetchData } from "../Apis/Apis.js";
// , onAdd, onClick, onRemove }

export default async function App() {
  const username = "test123";

  const data = await fetchData({ username, method: "GET" });

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");

  const RemoveAll = new CustomEvent("removeAll");

  window.addEventListener("removeAll", async () => {
    data.forEach(async (e) => {
      await fetch(`https://todo-api.roto.codes/${username}/${e._id}`, {
        method: "DELETE",
      });
    });
    const removedAllData = await fetchData(username);
    todoList.setState(removedAllData);
  });

  const todoList = new TodoList({
    $target: $todoList,
    removeEvent: RemoveAll,
    initialState: data,
    username: username,
    onClick: async function (username, id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: "PUT",
      });
      const updatedData = await fetchData(username);
      todoList.setState(updatedData);
    },
    onRemove: async function (username, id) {
      await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: "DELETE",
      });
      const updatedData = await fetchData(username);
      todoList.setState(updatedData);
    },
  });
  const todoInput = new TodoInput({
    $target: $addTodo,
    initialState: data,
    username: username,
    onAdd: async function (username, inputData) {
      await fetch(`https://todo-api.roto.codes/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `${inputData}`,
        }),
      });
      const updatedData = await fetchData(username);
      todoList.setState(updatedData);
    },
  });
  const todoCount = new TodoCount({
    $target: $todoCount,
    initialState: data,
    username: username,
  });
}
