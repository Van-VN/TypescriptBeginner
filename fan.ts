enum fanSpeed {
  SLOW = 1,
  MEDIUM,
  FAST,
}

export class Fan {
  speed = fanSpeed.SLOW;
  FanStatus: boolean = false;
  radius: number = 5;
  color: string = "blue";
  constructor() {}

  getSpeed() {
    return this.speed;
  }

  getStatus() {
    return this.FanStatus;
  }

  getRadius() {
    return this.radius;
  }

  getColor() {
    return this.color;
  }

  turnonFan() {
    this.FanStatus = true;
  }

  turnoffFan() {
    this.FanStatus = false;
  }

  setColor(color: string) {
    this.color = color;
  }

  setSpeed(num: number) {
    this.speed = num;
}

  setRadius(rad: number) {
    this.radius = rad;
  }

  toString() {
    if (this.FanStatus) {
      console.log(`${this.speed}, ${this.color}, ${this.radius}\nFan is on!`);
    } else {
      console.log(`${this.color}, ${this.radius}\nFan is off!`);
    }
  }
}

let fan = new Fan();
fan.toString();
fan.turnonFan();
fan.toString();
fan.setSpeed(3);
fan.toString();