import AddButton from "@/components/AddButton";
import TransactionsList from "@/components/TransactionsList";
import styles from "./transactions.module.sass";
import { TransactionProps } from "./transactions.types";

async function getTransactions() {
  const data = await fetch("http://localhost:3000/api/transactions", {
    cache: "no-cache",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

async function getCategories() {
  const data = await fetch(
    "http://localhost:3000/api/transactions/categories",
    { cache: "no-cache" }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

export default async function Transactions() {
  const transactions: TransactionProps[] = await getTransactions();
  const categories = await getCategories();

  return (
    <div className={styles.root}>
      <div className={styles.topbar}>
        <h1>Transactions</h1>
      </div>
      <TransactionsList transactions={transactions} />
      <AddButton href="/transactions/add" />
    </div>
  );
}
