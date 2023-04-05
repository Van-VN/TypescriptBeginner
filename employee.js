"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Staff = /** @class */ (function () {
    function Staff() {
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (input) {
        this.name = input;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (input) {
        this.email = input;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (input) {
        this.age = input;
    };
    Staff.prototype.getInfo = function () {
        console.log(this.getName(), this.getEmail(), this.getAge());
    };
    return Staff;
}());
exports.Staff = Staff;
var firstStaff = new Staff();
firstStaff.setName("ABC");
firstStaff.setEmail("Email@abc.com");
firstStaff.setAge(20);
firstStaff.getInfo();
