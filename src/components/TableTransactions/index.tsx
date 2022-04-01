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

interface TransactionsProps {
  transactions: Transaction[]
}

const TableTransactions = ({ transactions }: TransactionsProps) => {
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
          <tr>
            <td>Movimentação Interna</td>
            <td>Carteira 1 para Carteira 2</td>
            <td>Processando</td>
            <td>R$ 1800,00</td>
          </tr>
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
          {/* <tr>
            <td>Resgate</td>
            <td>Warren</td>
            <td>Solicitada</td>
            <td>R$ 1200,00</td>
          </tr>
          <tr>
            <td>Depósito</td>
            <td>Conta</td>
            <td>Concluída</td>
            <td>R$ 5000,00</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default TableTransactions;