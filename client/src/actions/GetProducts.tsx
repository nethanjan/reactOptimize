import store from "../store";
import Api from "./Api";

export function GetProductsAction() {
	Api.runGraphQLRequest(
		"post",
		"query",
		"categories",
		`{
                categories: productLists(ids: "156126", locale: de_DE) {
                  name
                  articleCount
                  childrenCategories: childrenProductLists {
                    list {
                      name
                      urlPath
                    }
                  }
                  categoryArticles: articlesList(first: 50) {
                    articles {
                      name
                      variantName
                      prices {
                        currency
                        regular {
                          value
                        }
                      }
                      images(
                        format: WEBP
                        maxWidth: 200
                        maxHeight: 200
                        limit: 1
                      ) {
                        path
                      }
                    }
                  }
                }
              }`
	)
		.then((response: any) => {
			store.dispatch({
				type: "GET_POSTS",
				payload: response[0],
			});
		})
		.catch((err) => {
			console.log(err);
		});
}
