const Format = require('./view')

test('Se formatean los objetos con gastos a elementos HTML que contienen solo la informacion necesaria.', () => {
    const format = new Format(); 
    const expected = format.fortmatExpenses([
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para tomar',
            amount: 300,
            day: '13 December 2022',
        }
    ])
    const result = ['<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">algo para tomar</div> <span>$300</span></li>']

    expect(expected).toEqual(result);
});
test('Se formatean los objetos con ingresos a elementos HTML que contienen solo la informacion necesaria.', () => {
    const format = new Format(); 
    const expected = format.formatIncome([
        {
            account: 'BNA',
            categorie: 'super',
            comment: 'algo para tomar',
            amount: 300,
            day: '13 December 2022',
        }
    ])
    const result = ['<li class="list-group-item d-flex justify-content-between align-items-center"><div class="text-truncate">algo para tomar</div> <span>$300</span></li>']

    expect(expected).toEqual(result);
});