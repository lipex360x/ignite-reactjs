import logoImg from '../../assets/logo.svg'

import * as S from './styles'

export function Header () {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button>Nova Transação</button>
      </S.Content>
    </S.Container>
  )
}