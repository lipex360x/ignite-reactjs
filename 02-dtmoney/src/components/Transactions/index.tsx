import { dateFormat } from '../../shared/utils/dateTransform'
import { numberToReal } from '../../shared/utils/numberTransform'
import { useTransactions } from '../../hooks/useTransactions'
import * as S from './styles'

export function Transactions () {
  const { transactions } = useTransactions()
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
            <td className={transaction.type}>{numberToReal(transaction.amount)}</td>
            <td>{transaction.category}</td>
            <td>{dateFormat(transaction.createdAt)}</td>
          </tr>
          ))}

        </tbody>
      </table>
    </S.Container>
  )
}
