const { expect } = require('chai');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject not-string values', () => {
    res = isRealString(123);
    expect(res).to.be.false;
  });

  it('should reject string with only spaces', () => {
    res = isRealString('     ');
    expect(res).to.be.false;
  });

  it('should allow string with non-space characters', () => {
    res = isRealString('   string   ');
    expect(res).to.be.true;
  });
});
