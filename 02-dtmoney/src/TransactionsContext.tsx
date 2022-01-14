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

export const TransactionsContext = createContext<TransactionsProps[]>([])

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
