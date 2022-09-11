import { Article } from "./Article";

export interface Product {
	name: string;
	articleCount: number;
	categoryArticles: Article[];
	childrenCategories: Array<{
		name: string;
		urlPath: string;
	}>;
	loading: boolean;
}
