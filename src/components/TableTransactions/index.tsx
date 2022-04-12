import { useState } from 'react'
import './style.css'
import ModalTransaction from "../ModalTransaction"
import formatAmountToReal from '../../utils/formatCurrency'

export interface Transaction {
  id: string,
  title: string,
  description: string,
  status: "status" | "process" | "processing" | "completed"
  amount: number,
  date: string,
  from: string,
  to: string
}


const TableTransactions = ({ transactions }) => {
  const [show, setShow] = useState(false)
  const [transaction, setTransaction] = useState<Transaction>({} as Transaction);

  function translateStatus(status: string) {
    if (status === "status") return status

    let statusBr: String;

    switch (status) {
      case 'processing':
        return statusBr = 'Solicitando'
      case 'processed':
        return statusBr = 'Processada'
      case 'created':
        return statusBr = 'Concluída'
    }
  }

  function handleClick(transaction: Transaction) {
    setShow(true)
    setTransaction(transaction)
  }

  return (
    <div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: Transaction) => {
            return (
              <tr key={transaction.id} onClick={() => handleClick(transaction)}>
                <td className='title'>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{translateStatus(transaction.status)}</td>
                <td>{formatAmountToReal(transaction.amount)}</td>
              </tr>

            )
          })}
        </tbody>
      </table>
      {transaction &&
        <ModalTransaction
          key={transaction.id}
          show={show}
          onClose={() => setShow(false)}
          title={transaction.title}
          status={transaction.status}
          amount={transaction.amount}
          from={transaction.from}
          to={transaction.to}
        />
      }
    </div >
  )
}

export default TableTransactions;