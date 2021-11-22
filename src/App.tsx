import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransationModal() {
    setIsNewTransationModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal} />

      <NewTransactionModal 
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModal}
      />

      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}