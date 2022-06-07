export default function SearchInput({ $target, fetchData }) {
  let data = [];
  let timer;
  $target.addEventListener("keyup", (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      if (e.target.value.trim() !== "") {
        console.log("검색 시작");
        fetchData(e.target.value);
      }
    }, 1000);
  });
}
