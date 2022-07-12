import logo from "./logo.svg";
import "./Style/main.css";
import TodoList from "./Components/TodoList";
import { useCallback, useEffect, useState } from "react";
import { fetchAPI } from "./Apis/Api.js";
import checkValidity from "./Apis/checkValidity.js";
import TodoInput from "./Components/TodoInput";
import TodoCount from "./Components/TodoCount";
import UserList from "./Components/UserList";
import RemoveAll from "./Components/RemoveAll";
import Loading from "./Components/Loading";

function App() {
  const [username, setUsername] = useState("SeungHak");
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function changeState() {
    setIsLoading(true);
    const todos = await fetchAPI({ option: "GET", username: username });
    const users = await fetchAPI({ option: "GET_USER" });
    checkValidity(todos);
    setState(todos);
    setUsers(users);
    setIsLoading(false);
    console.log("changeState()");
  }

  useEffect(() => {
    changeState();
    console.log("useEffect");
  }, []);
  useEffect(() => {
    changeState();
    console.log("useEffect[username]");
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
              console.log("onToggle");
              changeState();
            }}
            onDelete={async (username, id) => {
              await fetchAPI({
                option: "REMOVE",
                username: username,
                id: id,
              });
              console.log("onDelete");
              changeState();
            }}
          />
          <TodoInput
            username={username}
            onAdd={async (username, text) => {
              if (text.trim().length > 0) {
                await fetchAPI({
                  option: "ADD",
                  username: username,
                  inputData: text,
                });
                console.log("onAdd");
                changeState();
              }
            }}
          />
          <TodoCount state={state} />
          <RemoveAll
            username={username}
            onClick={async (username) => {
              await fetchAPI({
                option: "REMOVE_ALL",
                username: username,
              });
              console.log("onRemoveAll");
              changeState();
            }}
          />
        </div>
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
      <Loading state={isLoading} />
    </>
  );
}

export default App;
