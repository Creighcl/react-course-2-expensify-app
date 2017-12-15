import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup Remove Expense Action Object', () => {
    const action = removeExpense({id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup Edit Expense Action Object', () => {
    const action = editExpense('123abc',{ propA: 'Something', propB: 'Something else', a1bx: 10});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { propA: 'Something', propB: 'Something else', a1bx: 10}
    });
});

test('should setup add expense actio object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const defaultObject = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...defaultObject,
            id: expect.any(String)
        }
    });
});