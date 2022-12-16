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
    console.log(e)
})