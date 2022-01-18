import { useContext } from 'react'
import { TransactionContext } from '../../TransactionsContext'
import * as S from './styles'

export function Transactions () {
  const transactions = useContext(TransactionContext)
  console.log(transactions)

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
