'use client';

import { Typography } from '@mui/material';
import styles from './TransactionsList.module.sass';
import TransactionRecord from './TransactionRecord';
import { TransactionsListProps } from './TransactionsList.types';
import If from '@/components/If';
import { FC } from 'react';

const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => {
    const allTransactions = transactions.map((transaction, index) => {
        const transactionDate = new Date(transaction.date);
        const prettyTransactionDate = transactionDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            weekday: 'long',
        });

        const prevTransDate = new Date(transactions[index - 1]?.date);

        const hasDateChanged = prevTransDate ? (prevTransDate.getDay() !== transactionDate.getDay()) : false;
        
        return (
            <div
                key={index}
            >
                <If condition={hasDateChanged}>
                    <Typography>{prettyTransactionDate}</Typography>
                    <div className={styles.divider} />
                </If>
                <TransactionRecord
                    title={transaction.category}
                    subtitle={transaction.subCategory || ''}
                    type={transaction.type}
                    amount={transaction.amount}
                />
            </div>
        )
    });

    return (
        <div className={styles.root}>
            {allTransactions}
        </div>
    );
};
export default TransactionsList;