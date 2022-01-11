import { Summary } from '../Summary'
import { Transactions } from '../Transactions'
import * as S from './styles'

export function Dashboard () {
  return (
    <S.Container>
      <Summary />
      <Transactions />
    </S.Container>
  )
}