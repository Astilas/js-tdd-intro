const assert = require('assert');
const Rectangle = require('../Rectangle');


describe('Rectangle', () => {
  // give the test a label using it

  it('racine carré', () => {
    const rectangle2 = new Rectangle(7,7);
    const rectangle1 = new Rectangle(10, 5);

    assert.strictEqual(typeof rectangle1.isSquare(), 'boolean');
    assert.strictEqual(rectangle2.isSquare(), false);
  });

  it('area', () => {
    const rectangle1 = new Rectangle(10, 5);
    assert.strictEqual(Rectangle.getArea(), 50);
  });

  it('perimètre', () => {
    const rectangle1 = new Rectangle(10, 5);
    assert.strictEqual(Rectangle.getPerimeter(), 30);
  });
});
