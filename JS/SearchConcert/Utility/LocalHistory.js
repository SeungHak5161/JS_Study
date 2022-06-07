const localData = window.localStorage;

export const setData = (history) => {
  localData.setItem('history', JSON.stringify(history));
};

export const getData = () => {
  const initialData = [];
  const recentSearch = localData.getItem('history');
  return recentSearch ? JSON.parse(recentSearch) : initialData;
};
