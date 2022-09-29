const myFuncs = require('../script')
// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
// const fs = require('fs');
// const path = require('path');

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});

describe('two plus 2 equals 4', () => {
    expect(myFuncs.addition(2, 2)).toBe(4);
})

