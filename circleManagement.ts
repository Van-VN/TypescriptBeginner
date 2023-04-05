export class Circle {
  color: string;
  radius: number;
  constructor(color: string, rad: number) {
    this.color = color;
    this.radius = rad;
  }
}

let circleList: Circle[] = [];

circleList.push(new Circle("Yellow", 10));
circleList.push(new Circle("Green", 15));
circleList.push(new Circle("Blue", 30));

function showCircle(circle: Circle) {
  console.log(
    `Hình tròn này có màu ${circle.color} và có bán kính là ${circle.radius}`
  );
}

circleList.forEach(showCircle);