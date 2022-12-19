class ViewAccounts {
    constructor(){}
    updateViewAccounts(accountsName) {
        this.#updateForms(accountsName)
    }
    #updateForms(accountsName) {
        const accounts = accountsName.map((accountName, index) => `<option value="${index+1}">${accountName}</option>`).join('')

        document.getElementById('income-account-select').innerHTML = `<option selected>Seleccione una cuenta</option>` + accounts
        document.getElementById('expense-account-select').innerHTML =  `<option selected>Seleccione una cuenta</option>` + accounts
    }
}

export default ViewAccounts