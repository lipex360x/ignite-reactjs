import Modal from 'react-modal'

import * as S from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className='react-modal-close'
       >
        <img src={closeImg} alt="close modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>
        <input
          placeholder='Title'
        />

        <input
          type="number"
          placeholder='Value'
        />

        <S.TypeContainer>
          <button
            type='button'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>

          <button
            type='button'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </button>
        </S.TypeContainer>

        <input
          placeholder='Category'
        />

        <button type="submit">Submit</button>
      </S.Container>
    </Modal>
  )
}
