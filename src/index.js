"use strict"

const accounts = {
    BNA: {
        expenses: [
            {
                account: 'BNA',
                categorie: 'super',
                comment: 'algo para tomar',
                amount: 300,
                day: '13 December 2022'
            }
        ],
        income: [
            {
                account: 'BNA',
                categorie: 'super',
                comment: 'algo para comer',
                amount: 150,
                day: '13 December 2022'
            }
        ]
    }

}

class FormatObjectsToHTMLElements {
    fortmatExpenses(expenses) {
        return expenses.map(expense => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${expense.comment}</div> <span>$${expense.amount}</span></li>`)
    }
    formatIncome(incomes) {
        return incomes.map(income => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${income.comment}</div> <span>$${income.amount}</span></li>`)
    }
}

class View {
    constructor() {
        this.expensesListElement = document.getElementById('expenses-list')
        this.incomeListElement = document.getElementById('income-list')
        this.formatObjectsToHTMLElements = new FormatObjectsToHTMLElements()

    }
    showExpenses(expenses) {
        this.expensesListElement.innerHTML = this.formatObjectsToHTMLElements.fortmatExpenses(expenses)
    }
    showIncome(income) {
        this.incomeListElement.innerHTML = this.formatObjectsToHTMLElements.formatIncome(income)
    }
}

module.exports = FormatObjectsToHTMLElemCents