const assert = require('assert');
const {expect} = require('chai');

const {sum, isAdult, sortArrayUp, sortArrayDown, isPalindrome, isOddNumber, isEvenNumber, isUpperCase, isLowerCase, isInteger} = require('../index');

describe('function sum', () => {

  it('should function sum works correct', () => {
    assert.equal(sum(2, 4), 6);
  });

  it('should function sum not equals 0', () => {
    assert.notEqual(sum(2,4), 0);
  });
});

it('should function sum works correct', () => {
  assert.equal(sum(2, 2), 4);
});