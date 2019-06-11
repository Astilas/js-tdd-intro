// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare(a,b) {
    if(a===b){
      return true;
    }else{
      return false;
    }
  }

  getArea(a,b) {
    return a*b;
  }

  getPerimeter(a,b) {
    return 2*(a+b);
  }
}

const rectangle = new Rectangle(10, 5);