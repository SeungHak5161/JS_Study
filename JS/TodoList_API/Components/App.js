import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
// import { setData, getData } from "./data.js";
import checkValidity from "../Utility/checkValidity.js";

export default async function App() {
  // const localData = window.localStorage;
  // this.state = getData({ localData });

  const username = "test123";

  async function fetchData() {
    const res = await fetch(`https://todo-api.roto.codes/test123`);
    // console.log(res);
    return await res.json();
  }

  const data = await fetchData();
  // this.initState = async () => {
  //   this.state = await fetchData();
  // };
  // // console.log(data);
  // this.state = [
  //   { content: "추가", isCompleted: false, _id: "62a58952ccbcff0556e9f5d5" },
  // ];
  // this.state = [];

  // this.setState = (nextData) => {
  //   // checkValidity(nextData);
  //   // setData({ localData, nextData });
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
    // console.log("removeAll event");
  });

  const todoList = new TodoList({
    $target: $todoList,
    // setState: this.setState,
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
    // setState: this.setState,
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
