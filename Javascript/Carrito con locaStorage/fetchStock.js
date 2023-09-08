export const fetchingData = async () => {
  let response = await fetch("stock.json");
  return response.json();
};
