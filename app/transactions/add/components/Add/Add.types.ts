export interface TransactionType {
    title: string;
    value: string;
}

export interface AddProps {
    transactionTypes: TransactionType[];
    categories: any[];
}