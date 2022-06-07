import { setData, getData } from '../Utility/LocalHistory.js';

export default function SearchHistory({ $target, searchWithoutHistory }) {
  this.state = getData();

  this.setState = function (inputValue) {
    // 히스토리와 중복되지 않는 경우
    if (
      !this.state.some((e) => {
        if (e === inputValue) {
          return e === inputValue;
        }
      })
    ) {
      this.state.push(inputValue);
      if (this.state.length === 6) {
        this.state.shift();
      }
      setData(this.state);
    }
    this.render();
  };

  this.render = function () {
    $target.innerHTML = `
        ${this.state
          .map(
            (e, index) =>
              `<span class="history-span" data-idx="${index}">${e}</span>`
          )
          .join('')}`;
  };

  $target.addEventListener('click', (e) => {
    const $span = e.target.closest('span');
    searchWithoutHistory($span.innerText);
  });

  this.render();
}
