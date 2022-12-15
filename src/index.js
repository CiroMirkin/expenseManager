"use strict"
const View = require('./view')
const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('./public/index.html');
})
app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

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