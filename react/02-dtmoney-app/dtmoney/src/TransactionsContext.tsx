import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface Transaction {
    id: number;
    title: string;
    typeTransaction: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>


export const TransactionsContext = createContext<TransactionContextData>(
   {} as TransactionContextData
)

export function TransactionsProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TransactionInput) {
        api.post('/transaction', transaction)   
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}