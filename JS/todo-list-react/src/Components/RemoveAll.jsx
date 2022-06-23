import React from "react";

export default function RemoveAll(props) {
  const username = props.username;
  const onClick = props.onClick;
  return (
    <button id="remove-all" onClick={() => onClick(username)}>
      RemoveAll
    </button>
  );
}
