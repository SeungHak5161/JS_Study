export default function UserList(params) {
  const $target = params.$target;
  const onClick = params.onClick;
  this.username = params.username;
  this.state = params.initialState;

  this.render = function () {
    $target.innerHTML = `<div class="listName">User List</div>
      <ul id="userUl">
        <li id="userNow">${this.username} ←</li>
        ${this.state
          .map(
            (e, index) =>
              `<li class="userItem" data-idx="${index}">
                ${e}
              </li>`
          )
          .join("")}
          </ul>
          `;
  };
  this.render();

  this.setUserName = (newUser) => {
    this.username = newUser;
    this.render();
  };
  this.setUserData = function (nextData) {
    this.state = nextData;
    this.render();
  };

  $target.addEventListener("click", (e) => {
    const className = e.target.className;
    if (className === "userItem") {
      const $li = e.target.closest("li");
      const idx = parseInt($li.dataset.idx);
      const username = this.state[idx];
      onClick(username);
    }
  });
}
