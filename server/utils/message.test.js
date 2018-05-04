const { expect } = require('chai');

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'User';
    const text = 'Test message';
    const message = generateMessage(from, text);

    expect(message.createdAt).is.a('number');
    expect(message).to.include({ from, text });
  });
});