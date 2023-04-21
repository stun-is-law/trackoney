export interface TransactionProps {
    date: string;
    category: string;
    subCategory?: string;
    amount: number;
    type: string;
    from?: string;
    to?: string;
    comment?: string;
}