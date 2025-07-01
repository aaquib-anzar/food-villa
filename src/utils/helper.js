export function filterData(searchText, restaurantList) {

  const filter = restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filter;
}
