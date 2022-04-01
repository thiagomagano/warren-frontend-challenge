import { useEffect } from 'react'
import './style.css'

export interface Transaction {
  id: string,
  title: string,
  description: string,
  status: string,
  amount: number,
  date: string,
  from: string,
  to: string
}
export interface Transactions {
  transactions: Transaction[]
}


const TableTransactions = ({ transactions }: Transactions) => {
  function translateStatus(status) {
    if (status === "status") return status

    let statusBr = ''

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
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{translateStatus(transaction.status)}</td>
                <td>R$ {transaction.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableTransactions;