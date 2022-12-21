
class ViewCategories {
    constructor() {
        this.incomeCategories = [
            {
                name: 'Regalo',
                icon: 'gift'
            },
            {
                name: 'Salario',
                icon: 'cash-coin'
            },
            {
                name: 'Ahorro',
                icon: 'piggy-bank'
            },
            {
                name: 'Otros',
                icon: 'question-lg'
            },
        ]
        this.expensesCategories = [
            {
                name: 'Gasto medico',
                icon: 'capsule'
            },
            {
                name: 'Regalo',
                icon: 'gift'
            },
            {
                name: 'Cafe',
                icon: 'cup-hot'
            },
            {
                name: 'Servicio online',
                icon: 'globe'
            },
            {
                name: 'Supermercado',
                icon: 'cart'
            },
            {
                name: 'Videojuegos',
                icon: 'controller'
            },
            {
                name: 'Otros',
                icon: 'question-lg'
            },
        ]
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