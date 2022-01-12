import Modal from 'react-modal'

import * as S from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

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
          <S.RadioBox
            type='button'
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </S.RadioBox>

          <S.RadioBox
            type='button'
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </S.RadioBox>
        </S.TypeContainer>

        <input
          placeholder='Category'
        />

        <button type="submit">Submit</button>
      </S.Container>
    </Modal>
  )
}
