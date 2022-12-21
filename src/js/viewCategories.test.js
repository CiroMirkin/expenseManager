const ViewCategories = require('./categories')

test('Se le entrega el nombre de un icono y devuelve un icono para usar en HTML.', () => {
    const viewCategories = new ViewCategories()
    const expected = viewCategories.getHTMLIconCategorie('Regalo')
    const result = '<i class="bi bi-gift"></i>'

    expect(expected).toBe(result);
});
