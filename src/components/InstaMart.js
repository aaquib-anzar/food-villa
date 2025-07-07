import { groceryItems } from "../mocks/groceryData"
import Shimmer from "./Shimmer";
import GroceryItemCard from "./GroceryItemCard";
import { Link } from "react-router";
const Instamart = () => {
    return GroceryItemCard?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap" data-testid="res-list">
          {groceryItems.map((item) => {
            return (
              <Link
                to={"/instamart/" + item.id}
                key={item.id}
              >
                <GroceryItemCard {...item} />
              </Link>
            );
          })}
        </div>
      );
}
export default Instamart