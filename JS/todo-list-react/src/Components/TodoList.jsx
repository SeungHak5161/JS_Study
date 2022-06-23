import React from "react";
import { useState } from "react";

export default function TodoList(props) {
  const state = props.state;
  const onDelete = props.onDelete;
  const onToggle = props.onToggle;
  const username = props.username;
  // const removeEvent = params.removeEvent;

  return (
    <>
      <div className="list-name">Todo List</div>
      <div id="todo-list-div">
        <div className="ul-wrap">
          <div className="sub-list-name">todo</div>
          <ul className="uls" id="todo-ul">
            {state.map(({ content, isCompleted, _id }, index) =>
              isCompleted ? (
                ""
              ) : (
                <li
                  key={_id}
                  data-idx={index}
                  className="todo-item"
                  onClick={(e) => {
                    const className = e.target.className;
                    if (className === "todo-item") {
                      const id = state[parseInt(e.target.dataset.idx)]._id;
                      onToggle(username, id);
                    } else if (className === "del-btn") {
                      const id = state[parseInt(e.target.dataset.idx)]._id;
                      onDelete(username, id);
                    }
                  }}
                  draggable="true"
                >
                  {content}
                  <input className="del-btn" type="checkbox" data-idx={index} />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="ul-wrap">
          <div className="sub-list-name">complete</div>
          <ul className="uls" id="complete-ul">
            {state.map(({ content, isCompleted, _id }, index) =>
              isCompleted ? (
                <li
                  key={_id}
                  data-idx={index}
                  className="todo-item"
                  onClick={(e) => {
                    const className = e.target.className;
                    if (className === "todo-item") {
                      const id = state[parseInt(e.target.dataset.idx)]._id;
                      onToggle(username, id);
                    } else if (className === "del-btn") {
                      const id = state[parseInt(e.target.dataset.idx)]._id;
                      onDelete(username, id);
                    }
                  }}
                  draggable="true"
                >
                  {content}
                  <input className="del-btn" type="checkbox" data-idx={index} />
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
