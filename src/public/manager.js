import View from "./view.js"

class Manager {
    constructor() {
        this.accounts = {
            BNA: {
                expenses: [
                    {
                        account: 'BNA',
                        categorie: 'Varios',
                        comment: 'Cable USB',
                        amount: 1500,
                        day: '17 December 2022'
                    }
                ],
                income: [
                    {
                        account: 'BNA',
                        categorie: 'progresar',
                        comment: 'ProgresAr',
                        amount: 2050,
                        day: '13 Octover 2022'
                    },
                    {
                        account: 'BNA',
                        categorie: 'super',
                        comment: 'progresar',
                        amount: 2050,
                        day: '13 December 2022'
                    },
                ]
            }
        
        }
        
        this.view = new View()
    }
    updateView(account) {
        const { expenses, income } = this.accounts[account]
        this.view.showExpenses(expenses)
        this.view.showIncomes(income)
        this.view.showTotalExpenses(expenses)
        this.view.showTotalIncome(income)
        this.view.showTotalAmount({ expenses, income })
    }
}

const expensesAndIncomeElementContainer = document.getElementById('expenses-and-income-container')

expensesAndIncomeElementContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    if(e.target.id == 'expenses-form') {
        const newExpense = getInformationFromInputs('expense')
    }
    if(e.target.id == 'income-form') {
        const newIncome = getInformationFromInputs('income')
    }
})

const getInformationFromInputs = (inputsArea) => {
    const date = new Date(Date.now()).toLocaleDateString()
    return {
        amount: document.getElementById(`${inputsArea}-amount-input`).value,
        account: document.getElementById(`${inputsArea}-account`).selectedOptions[0].label,
        categorie: document.getElementById(`${inputsArea}-categorie`).selectedOptions[0].label,
        comment: document.getElementById(`${inputsArea}-comment-input`).value,
        day: navigator.onLine ? date : `${date} ?`
    }
}