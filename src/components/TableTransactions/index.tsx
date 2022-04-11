import { SetStateAction, useState } from 'react'
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
export interface Transactions {
  transactions: Transaction[]
}


const TableTransactions = ({ transactions }: Transactions) => {
  const [show, setShow] = useState(false)
  const [transaction, setTransaction] = useState<Transaction>({} as Transaction);

  function translateStatus(status: string) {
    if (status === "status") return status

    let statusBr: String;

    switch (status) {
      case 'processing':
        statusBr = 'Solicitando'
        break;
      case 'processed':
        statusBr = 'Processada'
        break;
      case 'created':
        statusBr = 'Concluída'
        break;
    }
    return statusBr
  }

  function handleClick(transaction: SetStateAction<Transaction>) {
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