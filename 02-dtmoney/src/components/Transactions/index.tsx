import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import * as S from './styles'

interface TransactionsProps {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: Date
}

export function Transactions () {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('http://localhost:3000/api/transactions')
      setTransactions(data.transactions)
    })()
  }, [])

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
          </tr>
          ))}

        </tbody>
      </table>
    </S.Container>
  )
}
