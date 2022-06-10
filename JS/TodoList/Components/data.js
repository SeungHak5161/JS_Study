export const setData = ({ localData, nextData }) => {
  localData.setItem("todo", JSON.stringify(nextData));
};
export const getData = ({ localData }) => {
  const initialData = [];
  const todoData = localData.getItem("todo");
  return todoData ? JSON.parse(todoData) : initialData;
};
