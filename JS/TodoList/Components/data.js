const localData = window.localStorage;

export const setData = (newData) => {
  localData.setItem('todo', JSON.stringify(newData));
};

export const getData = (delData) => {
  const initialData = [];
  const TodoData = localData.getItem('todo');
  return TodoData ? JSON.parse(TodoData) : initialData;
};
