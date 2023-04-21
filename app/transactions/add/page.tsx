"use client";

import { useState, use, useEffect } from "react";
import styles from "./addTransaction.module.sass";
import { MenuItem, OutlinedInput, Select } from "@mui/material";

export default function AddTransaction() {
  const [transType, setTransType] = useState<string>("expense");
  const [transTypes, setTransTypes] = useState<string[]>([]);
  
  async function getTransactionTypes() {
    const data = await fetch("http://localhost:3000/api/transactions/types", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  
      setTransTypes(data);
  }

  useEffect(() => {
    getTransactionTypes();
  }, []);

  const typesOptions = transTypes.map((type: any) => (
    <MenuItem
      key={type}
      value={type}
      className={styles.typeItem}
    >
      {type.slice(0, 1).toUpperCase() + type.slice(1)}
    </MenuItem>
  ));

  return (
    <div className={styles.root}>
      <Select
        className={styles.typeSelect}
        value={transType}
        onChange={(event) => setTransType(event.target.value)}
      >
        {typesOptions}
      </Select>
      <OutlinedInput className={styles.amountInput} placeholder="Amount" />
    </div>
  );
}
