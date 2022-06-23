import React from "react";

export default function UserList(props) {
  const username = props.username;
  const users = props.users;
  const onClick = props.onClick;
  return (
    <>
      <div className="list-name">User List</div>
      <div id="user-now">{username} ←</div>
      <div id="user-list-div">
        <ul id="user-ul">
          {users.map((user, index) => (
            <li
              key={user}
              className="user-item"
              data-idx={index}
              onClick={(e) => {
                const newUser = users[parseInt(e.target.dataset.idx)];
                onClick(newUser);
              }}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
