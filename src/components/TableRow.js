// TransactionRow.js - TableRow component

import React from "react";

function TableRow({ transaction, handleDelete }) {
  const onDeleteButtonClick = (e) => {
    e.preventDefault();
    handleDelete(transaction.id);
  };

  return (
    <tr className="table-tr">
      <td>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td>
        <button onClick={onDeleteButtonClick}>Delete</button>
      </td>
    </tr>
  );
}

export default TableRow;
