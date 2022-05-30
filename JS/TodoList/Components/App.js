import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";
import TodoInput from "./TodoInput.js";
import checkValidity from "../Utility/checkValidity.js";

export default function App({ $target, data }) {
  this.state = data;

  this.setState = (nextData) => {
    checkValidity(nextData);
    this.state = nextData;
    todoList.setState(nextData);
    todoCount.setState(nextData);
  };

  this.changeCompleted = (nextData) => {
    this.setState(nextData);
  };

  this.addTodo = (newTodo) => {
    this.setState([...this.state, newTodo]);
  };

  this.deleteTodo = (nextData) => {
    this.setState(nextData);
  };

  const $todoList = document.getElementById("todo-list");
  const $addTodo = document.getElementById("add-todo");
  const $todoCount = document.getElementById("todo-count");

  const todoList = new TodoList(
    $todoList,
    data,
    this.changeCompleted,
    this.deleteTodo
  );
  const todoInput = new TodoInput($addTodo, this.addTodo);
  const todoCount = new TodoCount($todoCount, data);
}
