const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: false,
  },
];

const data_0521 = [
  {
    text: '아침 닭가슴살, 샐러드',
    isCompleted: true,
  },
  {
    text: '샤워하면서 화장실 청소',
    isCompleted: true,
  },
  {
    text: '오전 공부 2시간',
    isCompleted: false,
  },
  {
    text: '비블럭 부수고 오기',
    isCompleted: true,
  },
  {
    text: '회식 때 술 적당히 먹기',
    isCompleted: true,
  },
  {
    text: '뻘 짓 하지 말고 일찍 자기',
    isCompleted: false,
  },
];

const data_0523 = [
  {
    text: 'PR 올리고 받은 피드백 참고해서 수정하기',
    isCompleted: false,
  },
  {
    text: '구현해보고 싶었던 기능 구현하기',
    isCompleted: false,
  },
  {
    text: '운동가기',
    isCompleted: true,
  },
  {
    text: '빨래 돌리기',
    isCompleted: true,
  },
  {
    text: '일찍 자기',
    isCompleted: false,
  },
];

const targetElm = document.getElementById('todo-list');
const todoList = new TodoList(targetElm, data);
