import { useEffect, useState } from "react";
import FilterArea from "../FilterArea";
import TableTransactions from "../TableTransactions";

import api from '../../service/api'

import './style.css'

const Main = () => {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const response = await api.get('/')
    setTransactions(response.data)
  }
  useEffect(() => {
    getTransactions()
  })

  return (
    <main>
      <FilterArea />
      <TableTransactions transactions={transactions} />
    </main>
  )
}

export default Main;