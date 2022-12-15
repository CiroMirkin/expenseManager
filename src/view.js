import Calculo from './calculo.js'

class FormatObjectsToHTMLElements {
    fortmatExpenses(expenses) {
        return expenses.map(expense => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${expense.comment}</div> <span>$${expense.amount}</span></li>`).join('')
    }
    formatIncome(incomes) {
        return incomes.map(income => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${income.comment}</div> <span>$${income.amount}</span></li>`).join('')
    }
}

export default class View {
    constructor() {
        this.calculo = new Calculo() 
        this.formatObjectsToHTMLElements = new FormatObjectsToHTMLElements()

    }
    showExpenses(expenses) {
        const expensesListElement = document.getElementById('expenses-list')
        expensesListElement.innerHTML = this.formatObjectsToHTMLElements.fortmatExpenses(expenses)
    }
    showIncomes(income) {
        const incomeListElement = document.getElementById('income-list')
        incomeListElement.innerHTML = this.formatObjectsToHTMLElements.formatIncome(income)
    }
    showTotalExpenses(expenses) {
        const totalExpensesElement = document.getElementById('total-expenses')
        totalExpensesElement.innerText = this.calculo.calculateTotalExpenses(expenses)
    }
    showTotalIncome(income) {
        const totalIncomeElement = document.getElementById('total-income')
        totalIncomeElement.innerText = this.calculo.calculateTotalIncomes(income)
    }
    showTotalAmount({ income, expenses }){
        const totalAmountElement = document.getElementById('total')
        totalAmountElement.innerText = this.calculo.calculateTotal({ income, expenses }).total
    }
}
