import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {
  //const [restaurants, setRestaurants] = useState(restaurantList);

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return allRestaurants ?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-between bg-amber-100 shadow-xl p-2 m-2 h-17 rounded-xl">
        <div></div>
        <div className="justify-between">
          <input
            data-testid="search-txt"
            type="text"
            className=" bg-amber-50 p-2 rounded-xl"
            placeholder="Find food near you!!"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="search-btn"
            className="hover:font-extrabold rounded-xl p-2 m-2"
            type="search"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {!filteredRestaurants ? (
          <h1 data-testid = "shimmer">
            <Shimmer />
          </h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
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
