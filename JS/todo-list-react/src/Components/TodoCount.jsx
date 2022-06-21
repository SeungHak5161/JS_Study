import React from "react";

export default function TodoCount(props) {
  const state = props.initialState;
  return (
    <>
      <div>
        {state.filter((todo) => todo.isCompleted === true).length}/
        {state.length}
      </div>
    </>
  );
}
