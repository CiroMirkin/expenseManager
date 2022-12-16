import View from "./view.js"

class Manager {
    constructor() {
        this.accounts = {
            BNA: {
                expenses: [],
                income: []
            }
        
        }
        
        this.view = new View()
        this.updateView(Object.keys(this.accounts).at(0))
    }
    updateView(account) {
        const { expenses, income } = this.accounts[account]
        this.view.showExpenses(expenses)
        this.view.showIncomes(income)
        this.view.showTotalExpenses(expenses)
        this.view.showTotalIncome(income)
        this.view.showTotalAmount({ expenses, income })
    }
    addNewIncome(income){
        this.accounts[income.account].income.push(income)
    }
    addNewExpense(expense) {
        this.accounts[expense.account].expenses.push(expense)
    }
}

const manager = new Manager()

const expensesAndIncomeElementContainer = document.getElementById('expenses-and-income-container')

expensesAndIncomeElementContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    if(e.target.id == 'expenses-form') {
        const newExpense = getInformationFromInputs('expense')
        manager.addNewExpense(newExpense)
        manager.updateView(newExpense.account)
    }
    if(e.target.id == 'income-form') {
        const newIncome = getInformationFromInputs('income')
        manager.addNewIncome(newIncome)
        manager.updateView(newIncome.account)
    }
})
  
const getInformationFromInputs = (inputsArea) => {
    const date = new Date(Date.now()).toLocaleDateString()
    return {
        amount: Number(document.getElementById(`${inputsArea}-amount-input`).value),
        account: document.getElementById(`${inputsArea}-account`).selectedOptions[0].label,
        categorie: document.getElementById(`${inputsArea}-categorie`).selectedOptions[0].label,
        comment: document.getElementById(`${inputsArea}-comment-input`).value,
        day: navigator.onLine ? date : `${date} ?`
    }
}