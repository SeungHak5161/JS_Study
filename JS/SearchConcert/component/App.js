import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';
import SearchHistory from './SearchHistory.js';
import { fetchData } from '../Utility/FetchData.js';

export default function App() {
  this.state = [];
  this.setState = function ({ nextData, inputValue }) {
    this.state = nextData;
    searchResult.setState(nextData);
    searchHistory.setState(inputValue);
  };

  const searchData = async (inputValue) => {
    const data = await fetchData(inputValue);
    this.setState({ nextData: data, inputValue: inputValue });
  };

  const clickHistory = async (clickedHistory) => {
    const data = await fetchData(clickedHistory);
    searchResult.setState(data);
  };

  const $SearchInput = document.getElementById('search-keyword');
  const $SearchResult = document.getElementById('search-result');
  const $SearchHistory = document.getElementById('search-history');

  const searchInput = new SearchInput({
    $target: $SearchInput,
    searchData: searchData,
  });

  const searchResult = new SearchResult({
    $target: $SearchResult,
    Data: this.state,
  });

  const searchHistory = new SearchHistory({
    $target: $SearchHistory,
    clickHistory: clickHistory,
  });
}
