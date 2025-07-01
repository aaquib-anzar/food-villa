import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => dispatch(addItem(item));
  const handleRemoveItem = (item) => dispatch(removeItem(item));
  const handleClearCart = () => dispatch(clearCart());

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price/100 * item.qty || 0),
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="p-8 text-center text-gray-600 text-xl">
        🛒 Your cart is empty. Add some items!
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        🛍️ Your Cart
      </h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center py-2 border-b last:border-none"
        >
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500">₹{item.price/100}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleRemoveItem(item)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => handleAddItem(item)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4 text-lg font-semibold">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClearCart}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Clear Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
