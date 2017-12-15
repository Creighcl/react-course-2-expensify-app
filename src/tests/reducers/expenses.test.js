import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should set default state', () => {
    const state = expensesReducer(undefined, {  type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses on not found id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

//should add an expense
test('should add an expense', () => {
    const newExpense = {
        description: 'something new',
        createdAt: 22,
        note: '',
        amount: 125,
        id: 'some-id'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,newExpense]);
});

test('should edit expense when id found', () => {
    const changes = {
        amount: 10000,
        description: 'Rent2',
        note: 'x',
        createdAt: moment(0).subtract(8,'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: changes
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0],{...expenses[1], ...changes},expenses[2]]);
});

test('should not edit expense if id not found', () => {
    const changes = {
        amount: 10000,
        description: 'Rent2',
        note: 'x',
        createdAt: moment(0).subtract(8,'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'unfoundIDnumber',
        updates: changes
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});