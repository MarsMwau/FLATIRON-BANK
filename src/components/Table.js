// Table.js - Table component

import React from "react";
import TableRow from "./TableRow";

function Table({ transactions, handleDelete }) {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              transaction={transaction}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
