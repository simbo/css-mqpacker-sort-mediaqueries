const assert = require('assert');
const arrayShuffle = require('array-shuffle')
const sortMediaqueries = require('./..');
const { resolveMediaquery } = require('./../dist/resolve-mediaquery');
const { compareValues } = require('./../dist/compare-values');
const { fixtureMixed, fixtureSorted } = require('./fixtures');

describe('resolveMediaquery', () => {

  it('should extract min-width and max-width from mediaquery string', () => {
    const fixtures = {
      '(max-width: 100px)': { min: null, max: 100 },
      '(min-width: 100px)': { min: 100, max: null },
      '(min-width: 100px) and (max-width: 100px)': { min: 100, max: 100 }
    }
    Object.keys(fixtures)
      .forEach((query) =>
        assert.deepEqual(resolveMediaquery(query), fixtures[query])
      )
  });

  it('should return null for invalid mediaquery strings', () => {
    assert.equal(resolveMediaquery('whatever'), null);
  });

});

describe('compareValue', () => {

  it('should return 1 if A is greater than B or B is null', () => {
    assert.equal(compareValues(1, 0), 1);
    assert.equal(compareValues(0, null), 1);
  });

  it('should return -1 if A is smaller than B or A is null', () => {
    assert.equal(compareValues(0, 1), -1);
    assert.equal(compareValues(null, 0), -1);
  });

  it('should return 0 if A and B are equal or both are null', () => {
    assert.equal(compareValues(1, 1), 0);
    assert.equal(compareValues(null, null), 0);
  });

  it('should return fallback function return if A and B are eual and fallback function is set', () => {
    assert.equal(compareValues(1, 1, () => 2), 2);
  });

});

describe('sortMediaqueries', () => {

  it('should sort by min-width and/or max-width, ordered ascending', () => {
    const mixed = fixtureMixed.slice(0);
    const sorted = fixtureSorted.slice(0);
    mixed.sort(sortMediaqueries);
    assert.deepEqual(mixed, sorted);
  });

  it('should sort unsupported mediaquery formats to the end of the list', () => {
    let mixed = fixtureMixed.slice(0);
    const sorted = fixtureSorted.slice(0);
    const invalidQuery = 'some not supported mediaquery format';
    for (let i = 0; i < 100; i++) {
      mixed.push(invalidQuery);
      sorted.push(invalidQuery);
    }
    mixed = arrayShuffle(mixed);
    mixed.sort(sortMediaqueries);
    assert.deepEqual(mixed, sorted);
  });

});
