import logoImg from '../../assets/logo.svg'

import * as S from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {
  function soma () {
    return 4
  }

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal}>Nova Transação {soma()} </button>
      </S.Content>
    </S.Container>
  )
}
