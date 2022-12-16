const Calculo = require('./calculo')

test('Se calcula el total de gastos.', () => {
    const calculo = new Calculo(); 
    const expected = calculo.calculateTotalExpenses([
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para comer',
            amount: 5000,
            day: '13 December 2022',
        },
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para tomar',
            amount: 900,
            day: '13 December 2022',
        },
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para comer',
            amount: 500,
            day: '13 December 2022',
        },
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'gomitas',
            amount: 2050,
            day: '13 December 2022',
        },
    ])
    const result = 8450

    expect(expected).toBe(result);
});

test('Se calcula el total de ingresos.', () => {
    const calculo = new Calculo(); 
    const expected = calculo.calculateTotalIncomes([
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para comer',
            amount: 2050,
            day: '13 December 2022',
        },
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para tomar',
            amount: 2050,
            day: '13 December 2022',
        },
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para comer',
            amount: 4100,
            day: '13 December 2022',
        }
    ])
    const result = 8200
    

    expect(expected).toBe(result);
});

test('Se calcula el total de la cuenta.', () => {
    const calculo = new Calculo()
    const expected = calculo.calculateTotal({
        expenses: [{
            account: 'BNA',
            categorie: 'super',
            comment: 'unos caramelos',
            amount: 80,
            day: '',
        }],
        income: [
            {
                account: 'BNA',
                categorie: 'super',
                comment: '',
                amount: 900,
                day: '',
            },
            {
                account: 'BNA',
                categorie: 'super',
                comment: '',
                amount: 900,
                day: '',
            },
        ]
    })
    const result = {
        total: 1720,
        totalExpenses: 80,
        totalIncome: 1800
    }
    expect(expected).toEqual(result)
})