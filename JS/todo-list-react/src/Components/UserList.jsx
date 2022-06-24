import React from "react";

export default function UserList(props) {
  const username = props.username;
  const users = props.users;
  // console.log(users);
  return (
    <>
      <div className="list-name">User List</div>
      <div id="user-now">{username} ←</div>
      <div id="user-list-div">
        <ul id="user-ul">
          {users.map((user, index) => (
            <li key={user} className="user-item" data-idx={index}>
              {user}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
