import React from "react";

function GroceryItemCard({image, name, category, price}) {
  return (
    <div className="w-48 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-sm line-clamp-2">{name}</h3>
      <p className="text-gray-500 text-xs mt-1">{category}</p>
      <p className="text-black font-bold mt-1">₹{price}</p>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded text-sm"
      >
        Add
      </button>
    </div>
  );
}

export default GroceryItemCard;
