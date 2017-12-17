import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        Viewing { props.expensesCount } expense{ props.expensesCount === 1 ? '' : 's' } totalling { props.expenseTotal }    
    </div>
);

const mapStateToProps = (state) => {
    const currentExpenses = selectExpenses(state.expenses, state.filters);
    const expenseTotal = numeral(expensesTotal(currentExpenses)/100).format('$0,0.00');
    return {
        expensesCount: currentExpenses.length,
        expenseTotal
    };
};

export default connect(mapStateToProps)(ExpensesSummary);