export default function SearchResult({ $target, Data }) {
  this.state = Data;

  this.render = function () {
    $target.innerHTML = `${this.state
      .map(
        (d) =>
          `<div style="display: inline-block; width: 33%">
              <img src="${d.poster}" style="object-fit: cover; width: 100%;">
            </div>`
      )
      .join('')}`;
  };

  this.setState = function (nextData) {
    this.state = nextData;
    console.log(this.state);
    this.render();
  };

  this.render();
}