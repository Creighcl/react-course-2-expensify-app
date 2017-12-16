import React from 'react';
import { removeExpense } from '../actions/expenses';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <NavLink to={`/edit/${id}`}>{description}</NavLink>
    <p>
      {numeral(amount / 100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

