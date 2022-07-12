import React from "react";

export default function Loading(props) {
  const state = props.state;
  if (state === true) {
    return (
      <>
        <div id="loading">
          <span id="loading-text">Loading...</span>
        </div>
      </>
    );
  }
}
