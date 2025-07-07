import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { restaurantID } = useParams();
  const restaurantMenu = useRestaurant(restaurantID)

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div data-testid = "menu" className="flex flex-col gap-4">
      {Object.values(restaurantMenu).map((resMenu, index) => {
        return(
          <MenuItem key={`${resMenu.card.info.id}-${index}`} {...resMenu.card.info} />
        ) 
        
      })}
    </div>
  );
};

export default RestaurantMenu;

