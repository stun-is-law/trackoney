export interface TransactionType {
    title: string;
    value: string;
}

export interface AddTransactionProps {
    transactionTypes: TransactionType[];
}