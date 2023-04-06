"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personel = void 0;
var Personel = /** @class */ (function () {
    function Personel(firstName, lastName, dob, address, positition) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._dob = dob;
        this._address = address;
        this._positition = positition;
    }
    Object.defineProperty(Personel.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personel.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personel.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        set: function (dob) {
            this._dob = dob;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personel.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personel.prototype, "positition", {
        get: function () {
            return this._positition;
        },
        set: function (positition) {
            this._positition = positition;
        },
        enumerable: false,
        configurable: true
    });
    return Personel;
}());
exports.Personel = Personel;
