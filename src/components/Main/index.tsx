import { useEffect, useState } from "react";
import TableTransactions, { Transaction } from "../TableTransactions";


import api from '../../service/api'

import './style.css'

const Main = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([] as Transaction[]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('status')



  async function getTransactions() {
    const response = await api.get('/')
    setTransactions(response.data)
  }

  function handleFilters(transactions: Transaction[]) {
    let filterTransaction: Transaction[] = searchByTitle(transactions)
    filterTransaction = filterByStatus(filterTransaction)
    return filterTransaction
  }

  function searchByTitle(transactions: Transaction[]) {
    return transactions.filter(tr => tr.title.toLowerCase().indexOf(searchTerm) > -1)
  }
  function filterByStatus(transactions: Transaction[]) {
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


      </div>

      <TableTransactions transactions={handleFilters(transactions)} />
    </main>
  )
}

export default Main;