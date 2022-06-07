export default function SearchInput({ $target, fetchData }) {
  let data = [];
  $target.addEventListener("keyup", (e) => {
    if (e.target.value.trim() !== "") {
      fetchData(e.target.value);
    }
  });
}
