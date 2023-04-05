"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
var fanSpeed;
(function (fanSpeed) {
    fanSpeed[fanSpeed["SLOW"] = 1] = "SLOW";
    fanSpeed[fanSpeed["MEDIUM"] = 2] = "MEDIUM";
    fanSpeed[fanSpeed["FAST"] = 3] = "FAST";
})(fanSpeed || (fanSpeed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = fanSpeed.SLOW;
        this.FanStatus = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.getStatus = function () {
        return this.FanStatus;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.turnonFan = function () {
        this.FanStatus = true;
    };
    Fan.prototype.turnoffFan = function () {
        this.FanStatus = false;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.setSpeed = function (num) {
        this.speed = num;
    };
    Fan.prototype.setRadius = function (rad) {
        this.radius = rad;
    };
    Fan.prototype.toString = function () {
        if (this.FanStatus) {
            console.log("".concat(this.speed, ", ").concat(this.color, ", ").concat(this.radius, "\nFan is on!"));
        }
        else {
            console.log("".concat(this.color, ", ").concat(this.radius, "\nFan is off!"));
        }
    };
    return Fan;
}());
exports.Fan = Fan;
var fan = new Fan();
fan.toString();
fan.turnonFan();
fan.toString();
fan.setSpeed(3);
fan.toString();
