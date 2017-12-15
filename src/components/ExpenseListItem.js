import React from 'react';
import { removeExpense } from '../actions/expenses';
import { NavLink } from 'react-router-dom';

export default ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <NavLink to={`/edit/${id}`}>{description}</NavLink>
    <p>{amount} - {createdAt}</p>
  </div>
);

