"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, dob, email, phone) {
        this.gender = Gender.female;
        this.name = name;
        this.gender = gender;
        this.DoB = dob;
        this.email = email;
        this.phoneNum = phone;
    }
    return Staff;
}());
exports.Staff = Staff;
function showStaff(display) {
    console.log(display);
}
var staffList = [];
staffList.push(new Staff("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
staffList.push(new Staff("Tran Thi A", Gender.female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
staffList.push(new Staff("Huynh An Nhien", Gender.other, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
staffList.forEach(showStaff);
