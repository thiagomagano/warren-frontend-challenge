import './style.css'

const TableTransactions = () => {
  return (
    <div>
      <table className="transactions-table">
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Valor</th>
        </tr>
        <tr>
          <td>Movimentação Interna</td>
          <td>Carteira 1 para Carteira 2</td>
          <td>Processando</td>
          <td>R$ 1800,00</td>
        </tr>
        <tr>
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
        </tr>
      </table>
    </div>
  )
}

export default TableTransactions;