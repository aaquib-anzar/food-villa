import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
  <img
    data-testid = "logo"
    className="h-28 w-[150px]"
    alt="logo"
    src="https://yt3.googleusercontent.com/eTbFvSqrZRuYfPH9wbRpQwKPjpqkNQ52QQCBfBBNfrV1wCWP9ay6Ta75cCrYslHfJmbtBP_U=s900-c-k-c0x00ffffff-no-rj"
  />
);

const Header = () => {
  const isOnline = useOnline();
  const {user} = useContext(UserContext)
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="flex  justify-between p-2 m-2  bg-amber-100 rounded-xl shadow-xl">
      <Title />

      <div className="nav-items m-10">
        <ul className="flex">
          <Link to="/">
            <li className="text-xl  px-2 hover:font-extrabold rounded-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-xl px-2  hover:font-extrabold rounded-xl">About</li>
          </Link>
          <Link to="/contact">
            <li className="text-xl px-2  hover:font-extrabold rounded-xl">Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li className="text-xl px-2  hover:font-extrabold rounded-xl">Instamart</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-between m-10">
        <Link to="/cart"><li  data-testid = "cart" className="text-xl px-2  hover:font-extrabold rounded-xl">Cart-{cartItems.length}</li></Link>
        <span data-testid = "online-status" className="px-2">{isOnline ? user.name + " ✅" : "🔴"}</span>
        
      </div>
    </div>
  );
};
export default Header;

//composing react
/*const HeaderComponent = () => {
    return(
      <div>
        <Title />
        <h2>This is the functional component</h2>
        <h2>this is a h2 tag</h2>
      </div>
  
    )
  }*/

//Both the header c omponent are the same
