class Calculo {
    constructor() {

    }
    calculateTotalExpenses(expenses) {
        let totalExpenses = 0
        expenses.forEach(expense => totalExpenses += expense.amount)
        return {
            account: expenses[0].account,
            totalExpenses
        }
    }
    calculateTotalIncomes(incomes) {
        let totalIncomes = 0
        incomes.forEach(income => totalIncomes += income.amount)
        return {
            account: incomes[0].account,
            totalIncomes
        }
    }
}

module.exports = Calculo