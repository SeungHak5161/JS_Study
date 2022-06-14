import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import UserList from "./UserList.js";
// import checkValidity from "../Apis/checkValidity.js";
import { fetchAPI } from "../Apis/Api.js";

export default function App() {
  this.username = "SeungHak";
  this.state = [];
  this.UserData = [];
  this.setUserName = (nextName) => {
    this.username = nextName;
    this.setState();
  };
  this.setState = async () => {
    const updatedData = await fetchAPI({
      option: "GET",
      username: this.username,
    });
    this.state = updatedData;
    todoList.setState(this.state);
    todoCount.setState(this.state);
    todoInput.setUserName(this.username);
    userList.setUserName(this.username);
  };
  this.getUserData = async () => {
    const userData = await fetchAPI({ option: "GET_USER" });
    userList.setUserData(userData);
  };
  this.setState();
  this.getUserData();

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");
  const $userList = document.getElementById("user-list");

  const RemoveAll = new CustomEvent("removeAll");

  window.addEventListener("removeAll", async () => {
    await fetchAPI({ option: "REMOVE_ALL", username: this.username });
    await fetchAPI({
      option: "GET",
      username: this.username,
    });
    this.setState();
  });

  const todoList = new TodoList({
    $target: $todoList,
    removeEvent: RemoveAll,
    initialState: this.state,
    username: this.username,
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
    username: this.username,
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
    username: this.username,
  });
  const userList = new UserList({
    $target: $userList,
    initialState: this.UserData,
    username: this.username,
    onClick: (username) => {
      this.setUserName(username);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });
}
