import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

export default function App() {
  this.state = [];
  this.setState = function (nextData) {
    this.state = nextData;
    searchResult.setState(nextData);
  };

  const fetchData = async (inputValue) => {
    const response = await fetch(
      `https://api.idiots.band/api/search?keyword=${inputValue}`
    );
    const data = await response.json();
    this.setState(data);
  };

  const $SearchInput = document.getElementById("search-keyword");
  const $SearchResult = document.getElementById("search-result");

  const searchInput = new SearchInput({
    $target: $SearchInput,
    fetchData: fetchData,
  });

  const searchResult = new SearchResult({
    $target: $SearchResult,
    Data: this.state,
  });
}
