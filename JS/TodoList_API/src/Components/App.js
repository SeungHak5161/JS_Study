import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import checkValidity from "../Apis/checkValidity.js";

export default async function App() {
  const username = "test123";

  async function fetchData() {
    const res = await fetch(`https://todo-api.roto.codes/test123`);
    return await res.json();
  }

  const data = await fetchData();

  // this.setState = (nextData) => {
  //   // checkValidity(nextData);
  //   this.state = nextData;

  //   todoList.setState(this.state);
  //   todoCount.setState(this.state);
  //   todoInput.setState(this.state);
  // };

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");

  const RemoveAll = new CustomEvent("removeAll");

  window.addEventListener("removeAll", async () => {
    data.forEach(async (e) => {
      await fetch(`https://todo-api.roto.codes/test123/${e._id}`, {
        method: "DELETE",
      });
    });
    const removedAllData = await fetchData();
    todoList.setState(removedAllData);
  });

  const todoList = new TodoList({
    $target: $todoList,
    removeEvent: RemoveAll,
    initialState: data,

    onClick: async function (id) {
      await fetch(`https://todo-api.roto.codes/test123/${id}/toggle`, {
        method: "PUT",
      });
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },

    onRemove: async function (id) {
      await fetch(`https://todo-api.roto.codes/test123/${id}`, {
        method: "DELETE",
      });
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
  });
  const todoInput = new TodoInput({
    $target: $addTodo,
    initialState: data,
    onAdd: async function (inputData) {
      await fetch(`https://todo-api.roto.codes/test123`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `${inputData}`,
        }),
      });
      const updatedData = await fetchData();
      todoList.setState(updatedData);
    },
  });
  const todoCount = new TodoCount({
    $target: $todoCount,
    initialState: data,
  });
}
