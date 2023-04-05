export class Circle {
  rad: number;
  constructor(rad: number) {
    this.rad = rad;
  }
}

function calcDistant(r1: Circle, r2: Circle, dist: number) {
  return Math.sqrt(Math.abs(r1.rad - r2.rad) ** 2 + dist ** 2);
}

let circle1 = new Circle(9);
let circle2 = new Circle(5);

console.log(calcDistant(circle1, circle2, 24));