import { CategoryArticle } from "./CategoryArticle";
import { ChildCategory } from "./ChildCategory";

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory;
};
