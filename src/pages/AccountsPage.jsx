import React, { useState, useEffect } from "react";
import axios from "axios";

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/accounts")
      .then((response) => setAccounts(response.data))
      .catch((error) => console.error("Error fetching accounts:", error));
  }, []);

  return (
    <div className="container">
      <h1>Your Accounts</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name} - Balance: ${account.balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccountsPage;
