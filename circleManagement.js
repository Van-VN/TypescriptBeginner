"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, rad) {
        this.color = color;
        this.radius = rad;
    }
    return Circle;
}());
exports.Circle = Circle;
var circleList = [];
circleList.push(new Circle("Yellow", 10));
circleList.push(new Circle("Green", 15));
circleList.push(new Circle("Blue", 30));
function showCircle(circle) {
    console.log("H\u00ECnh tr\u00F2n n\u00E0y c\u00F3 m\u00E0u ".concat(circle.color, " v\u00E0 c\u00F3 b\u00E1n k\u00EDnh l\u00E0 ").concat(circle.radius));
}
circleList.forEach(showCircle);
