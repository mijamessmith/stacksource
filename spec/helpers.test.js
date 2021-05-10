const {
  validateZip,
  codesToString,
  sortCodesInAscendingOrder
} = require('../server/helpers.js');


describe('validateZip', () => {
  test('it confirms zip length is 5', () => {
    expect(validateZip('12345')).toBeTruthy();
  });

  test('it fails if zip is not all numbers', () => {
    expect(validateZip('ABN21')).toBeFalsy();
  });
})

describe('codesToString', () => {
  const testArray = [10321, 10322, 99999];

  test('it returns a string', () => {
    expect(typeof codesToString(testArray) === 'string').toBeTruthy();
  });

  test('it returns dashes between consecutive numbers', () => {
    expect(codesToString(testArray).split(',')[0].indexOf('-') === 5).toBeTruthy();
  })
})

describe('sortCodesInAscendingOrder', () => {
  var testZips = [10423, 18502, 20843, 99999]
  test('it places zipcodes with less numeric value before those of higher value', () => {
    expect(sortCodesInAscendingOrder(testZips)[0] < [1] < [2] < [3]).toBeTruthy();
  })
})