import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App () {
  const [modalTransactionOpen, setModalTransactionOpen] = useState(false)

  function handleOpenModal () {
    setModalTransactionOpen(true)
  }

  function handleCloseModal () {
    setModalTransactionOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenModal}/>
      <Dashboard />

      <Modal
        isOpen={modalTransactionOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  )
}
