//Custom Hooks
import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../constants";
const useRestaurant = (restaurantID) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  async function getData() {
    const res = await fetch(RES_MENU_URL + restaurantID);
    const data = await res.json();

    const fetchedData = data?.data?.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.itemCards
      )
      ?.flatMap((c) => c.card.card.itemCards);

    setRestaurantMenu(fetchedData);
  }
  useEffect(() => {
    getData();
  }, []);
  return restaurantMenu;
};
export default useRestaurant;
