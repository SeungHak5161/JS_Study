import React from "react";
import { useState } from "react";

export default function TodoList(props) {
  // const [state, setState] = useState(props.initialState);
  const state = props.initialState;
  const onDelete = props.onDelete;
  const onToggle = props.onToggle;

  // const username = props.username;
  // const removeEvent = params.removeEvent;

  return (
    <>
      <div className="list-name">Todo List</div>
      <div id="todo-list-div">
        <div className="ul-wrap">
          <div className="sub-list-name">todo</div>
          <ul className="uls" id="todo-ul">
            {state.map(({ content, isCompleted }, index) =>
              isCompleted ? (
                ""
              ) : (
                <li
                  className="todo-item"
                  onClick={(e) => {
                    const className = e.target.className;
                    if (className === "todo-item") {
                      onToggle(index);
                    } else if (className === "del-btn") {
                      onDelete(index);
                    }
                  }}
                  draggable="true"
                  key={index}
                >
                  {content}
                  <input className="del-btn" type="checkbox" />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="ul-wrap">
          <div className="sub-list-name">complete</div>
          <ul className="uls" id="complete-ul">
            {state.map(({ content, isCompleted }, index) =>
              isCompleted ? (
                <li
                  className="todo-item"
                  onClick={(e) => {
                    const className = e.target.className;
                    if (className === "todo-item") {
                      onToggle(index);
                    } else if (className === "del-btn") {
                      onDelete(index);
                    }
                  }}
                  draggable="true"
                  key={index}
                >
                  {content}
                  <input className="del-btn" type="checkbox" />
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
