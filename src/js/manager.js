import View from "./view.js"
import ViewAccounts from "./viewAccounts.js"
import Categories from "./categories.js"

class Manager {
    constructor() {
        this.accounts = new Object()

        this.view = new View()
        this.viewAccounts = new ViewAccounts()
        this.categories = new Categories()
        this.categories.showCategoriesInForm()

        if (!!Object.keys(this.accounts).length) {
            this.updateView(Object.keys(this.accounts).at(0))
        }
    }
    logAccount(accountName) {
        this.accounts[accountName] = {
            expenses: [],
            income: []
        }
        this.viewAccounts.updateViewAccounts(Object.keys(this.accounts))
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