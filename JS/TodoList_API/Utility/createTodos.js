export default function createTodos({ data, newData }) {
  return [
    ...this.state,
    {
      text: `${inputText}`,
      isCompleted: false,
    },
  ];
}
