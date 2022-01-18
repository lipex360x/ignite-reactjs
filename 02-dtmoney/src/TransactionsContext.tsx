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

type Request = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextProps {
  transactions: TransactionsProps[]
  createTransaction: (transaction: Request) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
)

export function TransactionsProvider ({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('http://localhost:3000/api/transactions')
      setTransactions(data.transactions)
    })()
  }, [])

  async function createTransaction (transactionInput: Request) {
    const response = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
