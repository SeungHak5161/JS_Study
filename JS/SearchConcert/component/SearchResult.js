export default function SearchResult({ $target, Data, searchWithoutHistory }) {
  this.state = Data;

  this.render = function () {
    $target.innerHTML = `${this.state
      .map(
        (d) =>
          `<div class="result-div">
              <img class="result-img" src="${d.poster}">
              ${d.musicians
                .map((e) => `<span class="result-span">${e}</span>`)
                .join('')}
            </div>`
      )
      .join('')}`;
  };

  this.setState = function (nextData) {
    this.state = nextData;
    this.render();
  };

  $target.addEventListener('click', (e) => {
    const $span = e.target.closest('span');
    searchWithoutHistory($span.innerText);
  });

  this.render();
}
