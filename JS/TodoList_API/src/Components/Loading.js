export default function Loading(params) {
  const $target = params.$target;
  this.state = true;

  this.render = function () {
    this.state
      ? ($target.innerHTML = `<div id="loading">
        <span id="loading-text">Loading...</span>
      </div>`)
      : ($target.innerHTML = ``);
  };
  this.render();

  this.setState = function () {
    this.state = this.state ? false : true;
    this.render();
  };
}
