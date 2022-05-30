export default function TodoCount($target, data) {
  this.state = data;
  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };
  this.render = function () {
    $target.innerHTML = `<div>${
      this.state.filter((todo) => todo.isCompleted === true).length
    }/${this.state.length}</div>`;
  };
  this.render();
}
