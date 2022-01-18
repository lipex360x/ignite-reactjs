import { useContext } from 'react'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext'

import * as S from './styles'

export function Summary () {
  const transactions = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <S.Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="income icon" />
        </header>
        <strong>R$1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImg} alt="income icon" />
        </header>
        <strong>-R$500,00</strong>
      </div>

      <div className='total'>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="income icon" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </S.Container>
  )
}
