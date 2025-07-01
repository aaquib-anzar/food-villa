import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { IMAGE_URL } from "../constants";

const MenuItemCard = ({ name, price, description, imageId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ name, price, description, imageId }));
  };

  return (
    <div className="flex justify-between items-start gap-4 p-4 border-b border-gray-200">
      {/* LEFT: Text Info */}
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900">{name}</h3>

        {price && (
          <p className="text-sm font-semibold text-gray-700 mt-1">
            ₹{price / 100}
          </p>
        )}

        <p
          className="text-xs text-gray-500 mt-2"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description || "No description available"}
        </p>
      </div>

      {/* RIGHT: Image + ADD */}
      <div className="w-28 relative">
        {imageId && (
          <img
            className="w-full h-24 object-cover rounded-md border border-gray-100"
            src={IMAGE_URL + imageId}
            alt={name}
          />
        )}

        <button
          onClick={handleAddToCart}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-gray-400 text-green-600 text-xs font-semibold px-4 py-[2px] rounded shadow-sm hover:border-green-500 hover:text-green-700 transition"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
