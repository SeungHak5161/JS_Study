import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import checkValidity from "../Utility/checkValidity.js";

export default function App({ $target, data }) {
  checkValidity(data);
  this.state = data;

  this.setState = (nextData) => {
    this.state = nextData;
    console.log("App.js setState");
    todoList.setState(nextData);
  };

  this.addTodo = (newTodo) => {
    this.setState([...this.state, newTodo]);
  };

  this.deleteTodo = (nextData) => {
    this.setState(nextData);
  };

  const todoList = new TodoList($target, data, this.deleteTodo);
  const todoInput = new TodoInput(this.addTodo);
}
