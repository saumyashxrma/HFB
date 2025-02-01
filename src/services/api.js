import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hindfundsbank.com",
});

export const getAccounts = () =>
  Promise.resolve({
    data: [
      { id: 1, name: "Savings Account", balance: 25000 },
      { id: 2, name: "Current Account", balance: 75000 },
    ],
  });

export default api;
