"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(rad) {
        this.rad = rad;
    }
    return Circle;
}());
exports.Circle = Circle;
function calcDistant(r1, r2, dist) {
    return Math.sqrt(Math.pow(Math.abs(r1.rad - r2.rad), 2) + Math.pow(dist, 2));
}
var circle1 = new Circle(9);
var circle2 = new Circle(5);
console.log(calcDistant(circle1, circle2, 24));
