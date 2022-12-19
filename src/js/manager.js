import View from "./view.js"

class Manager {
    constructor() {
        this.accounts = new Object()

        this.view = new View()
        if (!!Object.keys(this.accounts).length) {
            this.updateView(Object.keys(this.accounts).at(0))
        }
    }
    logAccount(accountName) {
        this.accounts[accountName] = {
            expenses: [],
            income: []
        }
    }
    updateView(account) {
        const { expenses, income } = this.accounts[account]
        this.view.showExpenses(expenses)
        this.view.showIncomes(income)
        this.view.showTotalExpenses(expenses)
        this.view.showTotalIncome(income)
        this.view.showTotalAmount({ expenses, income })
    }
    addNewIncome(income) {
        this.accounts[income.account].income.push(income)
    }
    addNewExpense(expense) {
        this.accounts[expense.account].expenses.push(expense)
    }
}

export default Manager