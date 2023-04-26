import React, { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form"

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, { 
      method: "DELETE" 
    })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse response body as JSON
      } else {
        throw new Error(`Failed to delete record with ID ${id}`);
      }
    })
    .then((deletedTransaction) => {
      // Update state with the updated transactions data
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== id
      );
      setTransactions(updatedTransactions);
      setFilteredTransactions(updatedTransactions);
  
      // Perform additional actions with the deletedTransaction object
      console.log("Deleted transaction:", deletedTransaction);
      // ... do something with deletedTransaction
  
    })
    .catch((error) => {
      console.error(error);
      // Handle error, e.g. show an error message to the user
    });
  };  
 
  const handleSubmit = (transaction) => {
    setTransactions([...transactions, transaction]);
    setFilteredTransactions([...transactions, transaction]);
  };
  function handleAddTransaction(newTransaction) {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  }
  

  return (
    <div className="body">
        <h1 className="title">FLATIRON BANK</h1>
        <p>We take care of your Transactions</p>
        <input type="text" placeholder="Search.." value={searchTerm} onChange={handleSearch} />
      <Table
        transactions={filteredTransactions}
        onDelete={handleDelete}
      />
        
      <Form onSubmit={handleSubmit} onAdd={handleAddTransaction} transactions={transactions}/>
      
    </div>
  );
};

export default App;