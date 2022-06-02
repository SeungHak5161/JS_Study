export default function TodoList(
  $target,
  data,
  changeCompleted,
  deleteTodo,
  RemoveAll
) {
  this.state = data;

  this.render = function () {
    $target.innerHTML = `<ul id="todoUl">
      ${this.state
        .map(
          ({ text, isCompleted }, index) =>
            `<li class="todoItem" todo_idx="${index}">
              ${isCompleted ? `<s>${text}</s>` : text}
              <input class="delBtn" btn_idx="${index}" type="checkbox">
            </li>`
        )
        .join('')}
        </ul>
    `;
  };
  this.render();

  $target.addEventListener('click', (e) => {
    // e.target.tagName으로 구현해도 됨
    if (e.target.className === 'todoItem') {
      const changeData = [...this.state];
      // DOM 노드를 직접 따라가기보다 $li = e.target.closest('li') 사용하는게 편함
      // $li.dataset -> dataset을 가져올 수 있다고 함 알아보기(parseInt 해줘야함)
      changeData[e.target.attributes.todo_idx.nodeValue].isCompleted =
        !changeData[e.target.attributes.todo_idx.nodeValue].isCompleted;
      changeCompleted(changeData);
    } else if (e.target.className === 'delBtn') {
      const changeData = [...this.state];
      changeData.splice(e.target.attributes.btn_idx.nodeValue, 1);
      deleteTodo(changeData);
    }
  });

  const $removeAll = document.getElementById('remove-all');
  $removeAll.addEventListener('click', () => {
    dispatchEvent(RemoveAll);
  });

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };
}
