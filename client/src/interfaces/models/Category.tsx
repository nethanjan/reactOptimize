import { CategoryArticle } from './CategoryArticle'
import { ChildCategory } from './ChildCategory'

export interface Category {
  name: string
  categoryArticles: CategoryArticle
  articleCount: number
  childrenCategories: ChildCategory
}
