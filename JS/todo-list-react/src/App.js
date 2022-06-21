import logo from "./logo.svg";
import "./Style/main.css";
import TodoList from "./Components/TodoList";
import { useState } from "react";
import { fetchAPI } from "./Apis/Api.js";
import checkValidity from "./Apis/checkValidity.js";
import TodoInput from "./Components/TodoInput";
import TodoCount from "./Components/TodoCount";

function App() {
  const data = [
    {
      content: "1",
      isCompleted: false,
    },
    {
      content: "2",
      isCompleted: true,
    },
    {
      content: "3",
      isCompleted: false,
    },
  ];
  const [state, setState] = useState(data);
  // const [username, setUsername] = useState("SeungHak");

  // async function setAllState() {
  //   const updatedData = await fetchAPI({
  //     option: "GET",
  //     // option: "DELAY_GET",
  //     username: username,
  //   });
  //   console.log(updatedData);
  //   checkValidity(updatedData);
  //   setState(updatedData);
  // }

  return (
    <>
      <div id="todo-app">
        <div id="todo-list">
          <TodoList
            initialState={state}
            // username={username}
            onToggle={(idx) => {
              const newState = [...state];
              newState[idx].isCompleted = !newState[idx].isCompleted;
              setState(newState);
            }}
            onDelete={(idx) => {
              const newState = [...state];
              newState.splice(idx, 1);
              setState(newState);
            }}
          />
        </div>
        <div id="add-todo">
          <TodoInput
            onAdd={(text) => {
              if (text.trim().length > 0) {
                const newState = [...state];
                const newTodo = { content: text, isCompleted: false };
                newState.push(newTodo);
                setState(newState);
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
        <div id="user-list"></div>
      </div>
      <div id="loading-div"></div>
    </>
  );
}

export default App;
