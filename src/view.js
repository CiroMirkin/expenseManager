const Calculo = require('./calculo')

class FormatObjectsToHTMLElements {
    fortmatExpenses(expenses) {
        return expenses.map(expense => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${expense.comment}</div> <span>$${expense.amount}</span></li>`)
    }
    formatIncome(incomes) {
        return incomes.map(income => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${income.comment}</div> <span>$${income.amount}</span></li>`)
    }
}

export default class View {
    constructor() {
        this.expensesListElement = document.getElementById('expenses-list')
        this.incomeListElement = document.getElementById('income-list')
        this.calculo = new Calculo() 
        this.formatObjectsToHTMLElements = new FormatObjectsToHTMLElements()

    }
    showExpenses(expenses) {
        this.expensesListElement.innerHTML = this.formatObjectsToHTMLElements.fortmatExpenses(expenses)
    }
    showIncome(income) {
        this.incomeListElement.innerHTML = this.formatObjectsToHTMLElements.formatIncome(income)
    }
    showTotalExpenses(expenses) {
        const totalExpensesElement = document.getElementById('total-expenses')
        totalExpensesElement.innerText = this.calculo.calculateTotalExpenses(expenses)
    }
    showTotalExpenses(income) {
        const totalIncomeElement = document.getElementById('total-income')
        totalIncomeElement.innerText = this.calculo.calculateTotalIncomes(income)
    }
    showTotalAmount({ income, expenses }){
        const totalAmountElement = document.getElementById('total')
        totalAmountElement.innerText = this.calculo.calculateTotal().total
    }
}

module.exports = FormatObjectsToHTMLElements