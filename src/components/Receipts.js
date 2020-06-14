import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store';
import { clearTransactions } from '../store/reducers/transaction';
import { clearPortfolio } from '../store/reducers/portfolio';

const Receipts = ({ transaction }) => {
  return ( 
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.stock.symbol} - </td>
      <td>{transaction.quantity}</td>
      <td>@ ${transaction.price / 100 }</td>
      <td>${transaction.totalValue / 100 }</td>
      <td>{new Date(transaction.createdAt).toDateString()}</td>
    </tr>
  );
}

export default Receipts;
