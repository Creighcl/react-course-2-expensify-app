export default (expenses) => {
    return expenses
        .map(o=>o.amount)
        .reduce((sum,amount) => sum + amount, 0);
};