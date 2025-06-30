import { IMAGE_URL } from "../constants";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
}) => {
  return (
    <div className="w-[210px] bg-amber-200 shadow-xl rounded-xl  p-2 m-2 hover:transition-shadow">
      <img className="w-[200px]"src={IMAGE_URL + cloudinaryImageId} />
      <p className="text-center text-xl font-bold line-clamp-1 m-2">{name}</p>
      <p className="text-center line-clamp-1">{cuisines.join(", ")}</p>
      <p className="text-center">{sla.lastMileTravelString} minutes</p>
    </div>
  );
};
export default RestaurantCard;


//
