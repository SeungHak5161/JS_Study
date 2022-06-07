export const fetchData = async (inputValue) => {
  const response = await fetch(
    `https://api.idiots.band/api/search?keyword=${inputValue}`
  );
  const data = await response.json();
  return data;
};
