"use strict"
import Manager from "./public/manager.js"

const manager = new Manager()

let welcomeBootstrapModal = new bootstrap.Modal(document.getElementById('welcomeModal'), { keyboard: false })
const welcomModalElement = document.getElementById('welcomeModal')
welcomeBootstrapModal.show()
welcomModalElement.addEventListener('submit', (e) => {
  e.preventDefault()
  const principalAccountName = document.getElementById('princialAccountName').value
  if (!!principalAccountName) {
    manager.logAccount(principalAccountName)
    welcomeBootstrapModal.hide()
  }
})

const expensesAndIncomeElementContainer = document.getElementById('expenses-and-income-container')

expensesAndIncomeElementContainer.addEventListener('submit', (e) => {
  e.preventDefault()
  if (e.target.id == 'expenses-form') {
    const newExpense = getInformationFromInputs('expense')
    manager.addNewExpense(newExpense)
    manager.updateView(newExpense.account)
  }
  if (e.target.id == 'income-form') {
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