import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestrurantCard from "./components/RestaurantCard.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js"
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// How we use inline css in jsx


//Config Driven UI

// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "restaurant",
//     cards: [
//       {
//         name: "Food Tok",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zwjgq3ar4yle1ng5pirh",
//         cusins: ["NorthIndian", "Chinease"],
//         rating: "4.2",
//       },
//       {
//         name: "KFC",
//         image:
//           "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zwjgq3ar4yle1ng5pirh",
//         cusins: ["NorthIndian", "Chinease"],
//         rating: "4.2",
//       },
//     ],
//   },
// ];



//probs-parameter used in a function
// or some cool developer used {restaurant} instead of probs and we no need to write probs anywhere

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter  = createBrowserRouter([
  {
    path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    }
    ,{
      path:"/Cart",
      element:<Cart/>
    }
    ,{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }
  ],
  errorElement:<Error/>
},
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);