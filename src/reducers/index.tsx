import { combineReducers } from "redux";
import cartReducer from "./cartReducer.tsx";

export default combineReducers({
  cart: cartReducer,
});
