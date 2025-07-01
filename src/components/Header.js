import { Link } from "react-router";
import { useContext } from "react";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = ({ searchText, setSearchText, onSearch }) => {
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-white  sticky top-0 z-50 shadow-xl">
      {/* Logo */}
      <Link to="/">
        <img
          data-testid="logo"
          className="h-14 w-auto hover:scale-105 transition-transform duration-300"
          alt="logo"
          src="https://yt3.googleusercontent.com/eTbFvSqrZRuYfPH9wbRpQwKPjpqkNQ52QQCBfBBNfrV1wCWP9ay6Ta75cCrYslHfJmbtBP_U=s900-c-k-c0x00ffffff-no-rj"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-6">
        <ul className="flex gap-4 uppercase text-sm font-semibold text-gray-700">
          {["Home", "About", "Contact Us", "Instamart"].map((label, i) => {
            const path = label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`;
            return (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-amber-500 transition-colors"
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Search */}
        <div className="flex items-center gap-2 bg-amber-50 p-1 rounded-lg shadow-inner">
          <input
            data-testid="search-txt"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search food..."
            className="p-2 bg-transparent text-sm outline-none"
          />
          <button
            data-testid="search-btn"
            onClick={onSearch}
            className="text-sm bg-amber-300 hover:bg-amber-400 px-3 py-1 rounded-md transition"
          >
            Search
          </button>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative text-sm font-medium flex items-center gap-1">
          🛒
          <span data-testid="cart">Cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Online Status */}
        <span
          data-testid="online-status"
          className={`px-3 py-1 text-xs rounded-full font-semibold ${
            isOnline ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isOnline ? `${user.name} ✅` : "🔴 Offline"}
        </span>
      </nav>
    </header>
  );
};

export default Header;
