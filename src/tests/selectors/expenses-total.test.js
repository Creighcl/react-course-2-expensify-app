import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    let total = totalExpenses([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    let total = totalExpenses([expenses[1]]);
    expect(total).toBe(109500);
});

test('should correctly add up multiple expenses', () => {
    let total = totalExpenses(expenses);
    expect(total).toBe(114195);
});