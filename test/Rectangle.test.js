const assert = require('assert');
const Rectangle = require('../Rectangle');


describe('Rectangle', () => {
  // give the test a label using it

  it('racine carré', () => {
    assert.strictEqual(Rectangle.isSquare(10,5), false);
  });

  it('area', () => {
    assert.strictEqual(Rectangle.getArea((10,5)), 50);
  });

  it('perimètre', () => {
    assert.strictEqual(Rectangle.getPerimeter((10,5)), 30);
  });
});
