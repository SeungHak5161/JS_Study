export default function SearchInput({ $target, returnResult }) {
  $target.addEventListener('keyup', (e) => {
    fetch(`https://api.idiots.band/api/search?keyword=${e.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        returnResult(data);
      });
  });
}
