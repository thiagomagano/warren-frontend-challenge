import { useEffect, useState } from "react";
import TableTransactions, { Transactions } from "../TableTransactions";

import api from '../../service/api'

import './style.css'

const Main = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function getTransactions() {
    const response = await api.get('/')
    setTransactions(response.data)
  }

  function searchByTitle(transactions: Transactions) {
    return transactions.filter(tr => tr.title.toLowerCase().indexOf(searchTerm) > -1)
  }



  useEffect(() => {
    getTransactions()
    //console.log(searchTerm);
  }, [])

  //console.log(searchByTitle(transactions))

  return (
    <main>
      <div className="filter-area">

        <input type="search" placeholder="Pesquise pelo título" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <select name="status" defaultValue="status">
          <option value="status" disabled>Status</option>
          <option value="created">Solicitando</option>
          <option value="processed">Processada</option>
          <option value="processed">Concluida</option>
        </select>
      </div>

      <TableTransactions transactions={searchByTitle(transactions)} />
    </main>
  )
}

export default Main;