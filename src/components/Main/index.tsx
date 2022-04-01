import { useEffect, useState } from "react";
import TableTransactions, { Transactions } from "../TableTransactions";
import ModalTransaction from "../ModalTransaction"

import api from '../../service/api'

import './style.css'

const Main = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('status')

  const [show, setShow] = useState(false)

  async function getTransactions() {
    const response = await api.get('/')
    setTransactions(response.data)
  }

  function searchByTitle(transactions: Transactions) {
    return transactions.filter(tr => tr.title.toLowerCase().indexOf(searchTerm) > -1)
  }
  function filterByStatus(transactions: Transactions) {
    if (filterStatus != "status") {
      return transactions.filter(tr => tr.status.toLowerCase().indexOf(filterStatus) > -1)
    }
    return transactions

  }



  useEffect(() => {
    getTransactions()

  }, [])


  return (
    <main>
      <div className="filter-area">

        <input type="search" placeholder="Pesquise pelo título" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <select name="status" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="status" >Status</option>
          <option value="processing">Solicitando</option>
          <option value="processed">Processada</option>
          <option value="created">Concluida</option>
        </select>

        <button onClick={() => setShow(true)}>Show Modal</button>
        <ModalTransaction show={show} onClose={() => setShow(false)} />
      </div>

      <TableTransactions transactions={filterByStatus(searchByTitle(transactions))} />
    </main>
  )
}

export default Main;