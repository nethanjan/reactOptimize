import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";
import SearchReducer from "./SearchReducer";

export default combineReducers({
	products: ProductReducer,
	search: SearchReducer,
});
