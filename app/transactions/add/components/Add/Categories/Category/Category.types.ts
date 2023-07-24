export interface CategoryProps {
    handleSelect: (e: any) => void;
    selected: boolean;
    category: Category;
}

export interface Category {
    name: string;
    icon: string;
}