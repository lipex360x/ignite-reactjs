import { FormEvent, useState, useContext } from 'react'
import Modal from 'react-modal'

import * as S from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { TransactionsContext } from '../../TransactionsContext'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal ({ isOpen, onRequestClose }:NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction (event: FormEvent) {
    event.preventDefault()

    await createTransaction({ title, amount, type, category })

    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')

    onRequestClose()
  }

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

      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder='Title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder='Value'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
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
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Submit</button>
      </S.Container>
    </Modal>
  )
}
