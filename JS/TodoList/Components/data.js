const localData = window.localStorage;

export const setData = (newData) => {
  localData.setItem("todo", JSON.stringify(newData));
};

export const getData = (delData) => {
  const initialData = [];
  const todoData = localData.getItem("todo");
  return todoData ? JSON.parse(todoData) : initialData;
};
