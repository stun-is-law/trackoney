import { Category } from "./Category/Category.types";

export interface CategoriesProps {
    categories: Category[];
    selected: Category;
    handleSelect: (category: Category) => void;
}
