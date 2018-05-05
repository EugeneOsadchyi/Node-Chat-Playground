const { expect } = require('chai');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'User';
    const text = 'Test message';
    const message = generateMessage(from, text);

    expect(message.createdAt).is.a('number');
    expect(message).to.include({ from, text });
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    const from = 'User';
    const latitude = 15;
    const longitude = 19;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`
    const message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).is.a('number');
    expect(message).to.include({ from, url });
  });
});