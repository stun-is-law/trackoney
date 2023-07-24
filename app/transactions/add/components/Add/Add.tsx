"use client";

import { FC, useState } from "react";
import styles from "./Add.module.sass";
import { MenuItem, OutlinedInput, Select } from "@mui/material";
import { AddProps as AddProps } from "./Add.types";
import Categories from "./Categories/Categories";
import { Category } from "./Categories/Category/Category.types";
import { uncategorized } from "./Add.utils";

const Add: FC<AddProps> = ({ transactionTypes, categories }) => {
  const [transType, setTransType] = useState<string>("expense");
  const [category, setCategory] = useState<Category>(uncategorized);

  const handleCategorySelect = (e: any) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const typesOptions = transactionTypes.map((type: any) => (
    <MenuItem key={type} value={type} className={styles.typeItem}>
      {type}
    </MenuItem>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.basicInfoWrapper}>
        <Select
          className={styles.typeSelect}
          value={transType}
          onChange={(event) => setTransType(event.target.value)}
        >
          {typesOptions}
        </Select>
        <OutlinedInput
          className={styles.amountInput}
          placeholder="Amount"
          type="number"
        />
      </div>
      <Categories
        categories={categories}
        handleSelect={handleCategorySelect}
        selected={category}
      />
    </div>
  );
};

export default Add;
