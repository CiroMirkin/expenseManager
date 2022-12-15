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
    const result = {
        account: 'BNA',
        totalExpenses: 8450
    }

    expect(expected).toEqual(result);
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
    const result = {
        account: 'BNA',
        totalIncomes: 8200
    }

    expect(expected).toEqual(result);
});