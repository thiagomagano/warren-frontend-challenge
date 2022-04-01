const axios = require("axios");

const api = axios.create({
  baseURL:
    "https://warren-transactions-api.herokuapp.com/api/transactions",
});

async function getData() {
  const response = await api.get('/')
  const order = response.data.sort((a, b) => a.date - b.date)

  order.map(o => console.log(o.date));



}

getData();