import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import UserList from "./UserList.js";
import Loading from "./Loading.js";
// import checkValidity from "../Apis/checkValidity.js";
import { fetchAPI } from "../Apis/Api.js";
import DragAndDrop from "./Drag&Drop.js";

export default function App() {
  this.username = "SeungHak";
  this.state = [];
  this.UserData = [];
  this.setUserName = (nextName) => {
    this.username = nextName;
    const load = true;
    this.setState(load);
  };
  this.setState = async (load) => {
    const updatedData = await fetchAPI({
      option: "GET",
      username: this.username,
    });
    if (load) {
      const updatedData = await fetchAPI({
        option: "DELAY_GET",
        username: this.username,
      });
      loading.setState();
    }
    this.state = updatedData;
    todoList.setState(this.state);
    dragAndDrop.setState(this.state);
    todoCount.setState(this.state);
    todoInput.setUserName(this.username);
    userList.setUserName(this.username);
  };
  this.getUserData = async () => {
    const userData = await fetchAPI({ option: "GET_USER" });
    userList.setUserData(userData);
  };
  this.setLoadingState = () => {
    loading.setState();
  };
  this.setState();
  this.getUserData();

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");
  const $userList = document.getElementById("user-list");
  const $Loading = document.getElementById("loading-div");

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
      this.setState();
    },
    onRemove: async (username, id) => {
      await fetchAPI({
        option: "REMOVE",
        username: username,
        id: id,
      });
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
      this.setLoadingState();
    },
  });
  const loading = new Loading({
    $target: $Loading,
  });
  const dragAndDrop = new DragAndDrop({
    initialState: this.state,
    username: this.username,
    onDrag: async (username, id, isMoved) => {
      if (isMoved) {
        await fetchAPI({
          option: "TOGGLE",
          username: username,
          id: id,
        });
        await fetchAPI({ option: "GET", username: username });
        this.setState();
      }
    },
  });
}
