import axios from "axios";

const api = axios.create({
  baseURL:
    "https://warren-transactions-api.herokuapp.com/api/transactions",
});

export default api;