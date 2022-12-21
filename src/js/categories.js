
class ViewCategories {
    constructor(incomeCategories, expensesCategories) {
        this.incomeCategories = incomeCategories
        this.expensesCategories = expensesCategories
    }
    getHTMLIconCategorie(categorie) {
        const icons = [...this.expensesCategories, ...this.incomeCategories]
        return `<i class="bi bi-${icons.filter(icon => icon.name == categorie)[0].icon}"></i>`
    }
    showCategoriesInForm() {
        const incomeCategoriesOptions = this.incomeCategories.map((categorie, indexCategorie) => `<option value="${indexCategorie}">${categorie.name}</option>`).join('')
        const expensesCategoriesOptions = this.expensesCategories.map((categorie, indexCategorie) => `<option value="${indexCategorie}">${categorie.name}</option>`).join('')
        const defaultOption = '<option selected>Seleccione una categoria</option>'
        document.getElementById('income-categorie-select').innerHTML = defaultOption + incomeCategoriesOptions
        document.getElementById('expense-categorie-select').innerHTML = defaultOption + expensesCategoriesOptions
    }
}

export default ViewCategories