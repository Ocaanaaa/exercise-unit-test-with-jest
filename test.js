const { default: expect } = require('expect');
const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function () {
    const { fromEurToDol } = require('./app.js');
    const dollars = fromEurToDol(1);
    const expected = 1 * 1.07;
    expect(dollars).toBe(expected)
})

test("One Dollar should be 438.78504672897196 yen", function() {
    const { fromDolToYen } = require('./app.js');
    expect(fromDolToYen(1)).toBe(146.26168224299064); 
})
test("One yen should be 0.0055591054313099035", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBe(0.0055591054313099035); 
})