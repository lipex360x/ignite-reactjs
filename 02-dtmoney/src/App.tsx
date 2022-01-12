import { useState } from 'react'
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
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

      <NewTransactionModal
        isOpen={modalTransactionOpen}
        onRequestClose={handleCloseModal}
      />

      <GlobalStyle />
    </>
  )
}
