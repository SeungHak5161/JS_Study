import logo from "./logo.svg";
import "./Style/main.css";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react";
import { fetchAPI } from "./Apis/Api.js";
import checkValidity from "./Apis/checkValidity.js";
import TodoInput from "./Components/TodoInput";
import TodoCount from "./Components/TodoCount";
import UserList from "./Components/UserList";

function App() {
  const [username, setUsername] = useState("SeungHak");
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);
  async function changeState() {
    const data = await fetchAPI({ option: "GET", username: username });
    checkValidity(data);
    setState(data);
  }
  async function getUsers() {
    const data = await fetchAPI({ option: "GET_USER" });
    setUsers(data);
  }
  useEffect(() => {
    changeState();
    getUsers();
  }, []);
  useEffect(() => {
    changeState();
  }, [username]);

  return (
    <>
      <div id="todo-app">
        <div id="todo-list">
          <TodoList
            state={state}
            username={username}
            onToggle={async (username, id) => {
              await fetchAPI({
                option: "TOGGLE",
                username: username,
                id: id,
              });
              changeState();
            }}
            onDelete={async (username, id) => {
              await fetchAPI({
                option: "REMOVE",
                username: username,
                id: id,
              });
              changeState();
            }}
          />
        </div>
        <div id="add-todo">
          <TodoInput
            username={username}
            onAdd={async (username, text) => {
              if (text.trim().length > 0) {
                await fetchAPI({
                  option: "ADD",
                  username: username,
                  inputData: text,
                });
                changeState();
              }
            }}
          />
        </div>
        <div id="todo-count">
          <TodoCount initialState={state} />
        </div>
        <button id="remove-all">Remove All</button>
      </div>
      <div id="user-app">
        <div id="user-list">
          <UserList
            username={username}
            users={users}
            onClick={(newUser) => {
              setUsername(newUser);
            }}
          />
        </div>
      </div>
      <div id="loading-div"></div>
    </>
  );
}

export default App;
