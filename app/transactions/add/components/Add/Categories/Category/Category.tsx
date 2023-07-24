import Image from "next/image";
import { CategoryProps } from "./Category.types";
import styles from "./Category.module.sass";

const Category = ({ category, handleSelect }: CategoryProps) => (
  <div className={styles.root} onClick={handleSelect}>
    <div className={styles.icon}>
      <Image src={category.icon} alt={category.name} />
    </div>
    <div className={styles.name}>{category.name}</div>
  </div>
);

export default Category;
