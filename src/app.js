import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import { filterData } from "./utils/helper";
//import AboutClass from "./components/AboutClass";
import ProfileComponent from "./components/ProfileClass";
/*const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Namaste React1"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
  },
  "Namaste React2"
);
const div = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);*/

//Chunking,Lazy Loading/Dynamic import dynamic bundling
const Instamart = lazy(() => import("./components/InstaMart"));

//JSX

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Swiggy",
    email: "swiggy@swiggy.com",
  });

const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const [searchText, setSearchText] = useState("");
const onSearch = () => {
      setFilteredRestaurants(filterData(searchText,allRestaurants))
      setSearchText("")
}
  return (
    <Provider store={store}>
      <UserContext.Provider value = {{user:user, setUser:setUser}}>
      <Header searchText={searchText} setSearchText={setSearchText} onSearch={onSearch}/>
      <Outlet context = {{allRestaurants , filteredRestaurants, setAllRestaurants, setFilteredRestaurants}}/>
      <Footer />
    </UserContext.Provider>
    </Provider>
    
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", //for the first children /about or about both are same
        element: <About />,
        children: [
          {
            path: "profile", //not same for the second children "/profile" becoz it is render like localhost:1234/profile
            element:<ProfileComponent />, //Nested Routing
          },
        ],
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/restaurant/:restaurantID",
        element: <RestaurantMenu />, //Dynamic routing
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
