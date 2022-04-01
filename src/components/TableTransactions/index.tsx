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
                <td>{transaction.status}</td>
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