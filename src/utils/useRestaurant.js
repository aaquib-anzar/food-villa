//Custom Hooks
import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../constants";
const useRestaurant = (restaurantID) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  async function getData() {
    const data = await fetch(RES_MENU_URL + restaurantID);
    const json = await data.json();

    const fetchedData =
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    setRestaurantMenu(fetchedData);
  }
  useEffect(() => {
    getData();
  }, []);
  return restaurantMenu;
};
export default useRestaurant;
