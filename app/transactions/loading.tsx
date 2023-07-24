import styles from "./transactions.module.sass";

const Loading = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loadingWrapper}>Loading...</div>
    </div>
  );
};

export default Loading;
