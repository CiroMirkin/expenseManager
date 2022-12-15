class Calculo {
    constructor() {

    }
    calculateTotalExpenses(expenses) {
        let totalExpenses = 0
        expenses.forEach(expense => totalExpenses += expense.amount)
        return totalExpenses
    }
    calculateTotalIncomes(incomes) {
        let totalIncomes = 0
        incomes.forEach(income => totalIncomes += income.amount)
        return totalIncomes
        
    }
    calculateTotal({ expenses, income }) {
        const totalExpenses = this.calculateTotalExpenses(expenses)
        const totalIncome = this.calculateTotalIncomes(income) 
        const total = totalIncome - totalExpenses
        return {
            total,
            totalExpenses,
            totalIncome
        }
    }
}

module.exports = Calculo