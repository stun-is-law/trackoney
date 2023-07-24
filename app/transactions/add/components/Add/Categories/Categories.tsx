"use client";

import { CategoriesProps } from "./Categories.types";
import Category from "./Category/Category";
import styles from "./Categories.module.sass";
import { FC } from "react";

const Categories: FC<CategoriesProps> = ({
  categories,
  handleSelect,
  selected,
}) => {
  const availableCategories = categories.map((category: any) => (
    <Category
      key={category}
      category={category}
      selected={selected === category}
      handleSelect={handleSelect}
    />
  ));

  return <div className={styles.root}>{availableCategories}</div>;
};

export default Categories;
