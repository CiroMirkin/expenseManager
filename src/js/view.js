import Calculo from './calculo.js'
import ViewCategories from './viewCategories.js'

class FormatObjectsToHTMLElements {
    constructor(){
        this.viewCategories = new ViewCategories()
    }
    fortmatExpenses(expenses) {
        return expenses.map(expense => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${this.viewCategories.getHTMLIconCategorie(expense.categorie)} ${expense.categorie}</div> <span>$${expense.amount}</span></li>`).join('')
    }
    formatIncome(incomes) {
        return incomes.map(income => `<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">${this.viewCategories.getHTMLIconCategorie(income.categorie)} ${income.categorie}</div> <span>$${income.amount}</span></li>`).join('')
    }
}

class View {
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
        totalExpensesElement.innerText = `$${this.calculo.calculateTotalExpenses(expenses)}`
    }
    showTotalIncome(income) {
        const totalIncomeElement = document.getElementById('total-income')
        totalIncomeElement.innerText = `$${this.calculo.calculateTotalIncomes(income)}`
    }
    showTotalAmount({ income, expenses }){
        const totalAmountElement = document.getElementById('total')
        totalAmountElement.innerText = `$${this.calculo.calculateTotal({ income, expenses }).total}`
    }
}

export default View