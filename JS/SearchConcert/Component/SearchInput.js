export default function SearchInput({ $target, searchData }) {
  let timer;
  $target.addEventListener('keyup', (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      if (e.target.value.trim() !== '') {
        searchData(e.target.value);
      }
    }, 1000);
  });
}
