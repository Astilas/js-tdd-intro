// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare(a,b) {
    if(this.a===this.b){
      return true;
    }else{
      return false;
    }
  }

  getArea(a,b) {
    return this.a*this.b;
  }

  getPerimeter(a,b) {
    return 2*(this.a+this.b);
  }
}

const rectangle = new Rectangle(10, 5);
module.exports = Rectangle;