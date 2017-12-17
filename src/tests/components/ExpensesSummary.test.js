import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import { filters, altFilters } from '../fixtures/filters';
import { shallow } from 'enzyme';

test('should match snapshot for std filters, expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length } expenseTotal={'$100.00'} />);
    expect(wrapper).toMatchSnapshot();
});

test('should match snapshot for std filters, 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={'$100.00'} />);
    expect(wrapper).toMatchSnapshot();
});