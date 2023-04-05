"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
var fanSpeed;
(function (fanSpeed) {
    fanSpeed[fanSpeed["SLOW"] = 1] = "SLOW";
    fanSpeed[fanSpeed["MEDIUM"] = 2] = "MEDIUM";
    fanSpeed[fanSpeed["FAST"] = 3] = "FAST";
})(fanSpeed || (fanSpeed = {}));
class Fan {
    constructor() {
        this.speed = fanSpeed;
        this.FanStatus = false;
        this.radius = 5;
        this.color = "blue";
    }
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
    setColor(color) {
        this.color = color;
    }
    setRadius(rad) {
        this.radius = rad;
    }
    toString() {
        if (this.FanStatus) {
            console.log(`${this.speed}, ${this.color}, ${this.radius}\nFan is on!`);
        }
        else {
            console.log(`${this.color}, ${this.radius}\nFan is off!`);
        }
    }
}
exports.Fan = Fan;
//# sourceMappingURL=fan.js.map