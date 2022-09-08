import { DispatcherAction } from "../interfaces/actions/DispatcherAction";

const initialState = {
	name: "",
	articleCount: 0,
	categoryArticles: [],
	childrenCategories: [],
};

export default function (state = initialState, action: DispatcherAction) {
	switch (action.type) {
		case "GET_POSTS":
			return {
				name: action.payload.name,
				articleCount: action.payload.articleCount,
				categoryArticles: action.payload.categoryArticles.articles || [],
				childrenCategories: action.payload.childrenCategories.list
					? action.payload.childrenCategories.list
					: [],
			};
		default:
			return state;
	}
}
