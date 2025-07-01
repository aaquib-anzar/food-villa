import { IMAGE_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="w-[210px] bg-white hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 rounded-2xl p-3 m-2 border border-gray-100 relative">

      {/* Restaurant Image */}
      <img
        className="w-full h-[130px] object-cover rounded-xl"
        src={IMAGE_URL + cloudinaryImageId}
        alt={name}
      />

      {/* Discount badge (if available) */}
      {aggregatedDiscountInfo?.header && (
        <div className="absolute bottom-[115px] left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {aggregatedDiscountInfo?.header}
        </div>
      )}

      {/* Restaurant Info */}
      <div className="mt-2">
        <h3 className="text-md font-bold truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>

        <div className="flex justify-between text-sm mt-1 text-gray-700 font-medium">
          <span>⭐ {avgRating}</span>
          <span>• {sla?.deliveryTime} mins</span>
        </div>

        <p className="text-sm text-gray-500">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
