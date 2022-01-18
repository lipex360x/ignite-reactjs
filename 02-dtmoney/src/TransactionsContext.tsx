import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: Date
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<TransactionsProps[]>([])

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('http://localhost:3000/api/transactions')
      setTransactions(data.transactions)
    })()
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}
