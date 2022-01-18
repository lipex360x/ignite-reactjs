import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { numberToReal } from '../../shared/utils/numberTransform'
import { TransactionsContext } from '../../TransactionsContext'

import * as S from './styles'

export function Summary () {
  const { transactions } = useContext(TransactionsContext)

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'deposit') return acc + transaction.amount
  //   return acc
  // }, 0)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <S.Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>{numberToReal(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="income icon" />
        </header>
        <strong>-{numberToReal(summary.withdraw)}</strong>
      </div>

      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="income icon" />
        </header>
        <strong>{numberToReal(summary.total)}</strong>
      </div>
    </S.Container>
  )
}
