//Redux Toolkit 
//- Install @redux.js/toolkit and react-redux
// - Build our Store
// - Connect Store to our app
// -slice (Cart Slice )
//- dispatch Action 
//- Selector
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;