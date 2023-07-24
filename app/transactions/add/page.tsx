import styles from "./page.module.sass";
import Add from "./components/Add/Add";

async function getTransactionTypes() {
  const types = await fetch("http://localhost:3000/api/transactions/types", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return types;
}

async function getCategories() {
  const categories = await fetch(
    "http://localhost:3000/api/transactions/categories",
    {
      cache: "no-store",
    }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return categories;
}

export default async function Page() {
  const transTypes = await getTransactionTypes();
  const categories = await getCategories();

  return (
    <div className={styles.root}>
      <Add transactionTypes={transTypes} categories={categories} />
    </div>
  );
}
