import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { useOutletContext } from "react-router";

const Body = () => {
  //const [restaurants, setRestaurants] = useState(restaurantList);
  const {
    allRestaurants,
    filteredRestaurants,
    setAllRestaurants,
    setFilteredRestaurants,
  } = useOutletContext();

  async function getData() {
    const res = await fetch(
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6768&lng=77.4371&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    const restaurants = data?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      console.log("Number of restaurants:", restaurants.length);
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap" data-testid="res-list">
      {filteredRestaurants.map((restaurant) => {
        return (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        );
      })}
    </div>
  );
};
export default Body;
/*<input
            type="text"
            className=" bg-amber-50 p-2 rounded-xl"
            placeholder="Type to see the magic"
            onChange={(e) => {
              setUser({ ...user, name: e.target.value });
            }}
          />
*/
