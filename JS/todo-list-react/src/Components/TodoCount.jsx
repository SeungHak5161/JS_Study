import React from "react";

export default function TodoCount(props) {
  const state = props.state;
  return (
    <>
      <div id="todo-count">
        {state.filter((todo) => todo.isCompleted === true).length}/
        {state.length}
      </div>
    </>
  );
}
