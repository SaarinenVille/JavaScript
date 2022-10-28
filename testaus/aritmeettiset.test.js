const {summa, kerto, jako, vahennys} = require('./aritmeettiset');
// Yksilötestaukset
test('2 + 3 = 5', () => {
  expect(summa(2,3)).toBe(5);
});
test('2 * 3 = 6', () => {
  expect(kerto(2,3)).toBe(6);
});
test('4 / 2 = 2', () => {
  expect(jako(4,2)).toBe(2);
});
test('4 - 2 = 2', () => {
  expect(vahennys(4,2)).toBe(2);
});

// Joukkotestit
test.each([[2, 1, 3], [-1, 3, 2], [1, 1, 2]])(
  '%i + %i equals %i', (a, b, expected) => {
    expect(summa(a,b)).toBe(expected);
  }
);
test.each([[1, 2, 2], [2, 2, 4], [3, 3, 9]])(
  '%i * %i equals %i', (a, b, expected) => {
    expect(kerto(a,b)).toBe(expected);
  }
);
test.each([[4, 2, 2], [2, 2, 1], [9, 3, 3]])(
  '%i / %i equals %i', (a, b, expected) => {
    expect(jako(a,b)).toBe(expected);
  }
);
test.each([[1, 2, -1], [4, 2, 2], [9, 3, 6]])(
  '%i - %i equals %i', (a, b, expected) => {
    expect(vahennys(a,b)).toBe(expected);
  }
);
