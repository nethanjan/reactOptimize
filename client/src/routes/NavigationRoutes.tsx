import { Routes } from "../interfaces/routes/Routes";

import ProductList from "../screens/productList/ProductList";
import ProductListOld from "../screens/productList/ProductListOld";

const NavigationRoutes: Array<Routes> = [
	{
		id: 1,
		title: "Product List",
		path: "/",
		component: ProductList,
	},
	{
		id: 1,
		title: "Product List",
		path: "/products",
		component: ProductListOld,
	},
];

export default NavigationRoutes;
