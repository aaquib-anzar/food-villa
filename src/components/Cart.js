import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../constants";
import { clearCart } from "../utils/CartSlice";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(clearCart())
  }
  const[price, setPrice] = useState(0)
  
  return !cartItems ? (
    <Shimmer />
  ) : (
    <>
    <div className="flex flex-wrap justify-between bg-amber-100 p-2 m-2 shadow-xl">
        <p className="text-xl font-bold p-2 m-2">Your Cart!!</p>
        <p className="p-2 m-2">Total Price:</p>
        <button className="bg-red-400 rounded-xl font-bold p-2 m-2 right-0" onClick={() => handleClick()}>Clear Cart</button>
    </div>
      <div className="flex flex-wrap">
        {cartItems.map((item) => {
          return (
            <div className="w-[210px] bg-amber-200 shadow-xl rounded-xl  p-2 m-2" key={item.id}>
              <img className="w-[200px]" src={IMAGE_URL + item.imageId} />

              <p className="text-center text-xl font-bold line-clamp-1 m-2">
                {item.name}
              </p>
              <section className="line-clamp-1">{item.description}</section>

              <p className="text-center">{"Rs." + item.price / 100}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
