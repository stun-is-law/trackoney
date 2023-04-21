import { FC } from 'react';
import styles from './TransactionRecord.module.sass';
import If from '@/components/If';
import { TransactionRecordProps } from './TransactionRecord.types';

const TransactionRecord: FC<TransactionRecordProps>= ({
    title,
    subtitle,
    type,
    amount,
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.leftSide}>
                <div className={styles.circle} />
                <div className={styles.texts}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.subtitle}>
                        {subtitle}
                    </div>
                </div>
            </div>
            <div className={styles.amount}>
                <If condition={type === 'income'}>
                    <p className={`${styles.amount} ${styles.income}`}>
                        +{amount}
                    </p>
                </If>
                <If condition={type === 'expense'}>
                    <p className={`${styles.amount} ${styles.expense}`}>
                        -{amount}
                    </p>
                </If>
            </div>
        </div>
    )
}

export default TransactionRecord
