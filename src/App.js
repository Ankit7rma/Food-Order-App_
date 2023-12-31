import React, { Suspense, useEffect ,useState} from "react";
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
import { lazy } from "react";
import userContext from "./components/userContext.js";
// import Grocery from "./components/Grocery.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
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
const Grocery = lazy(()=>import('./components/Grocery.js'))
const AppLayout = () => {
  const [userName,setUserName] = useState()
  //Authentication
  useEffect(()=>{
    //make an API call and send username and password
    const data ={
      name :'Ankit Sharma Api '
  }
  setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
    <userContext.Provider value ={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </userContext.Provider>
    </Provider>
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
      path:"/grocery",
      element:<Suspense fallback={<h1>Error h Code nhi</h1>}>
      <Grocery/>
      </Suspense>
          },{
            path:"/cart",
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