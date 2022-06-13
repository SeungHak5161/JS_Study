export default function TodoCount(params) {
  const $target = params.$target;
  const initialState = params.initialState;

  this.state = initialState;
  this.render = function () {
    $target.innerHTML = `<div>${
      this.state.filter((todo) => todo.isCompleted === true).length
    }/${this.state.length}</div>`;
  };
  this.render();
  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };
}
