"use strict";
var Television = /** @class */ (function () {
    function Television(_brand, _size, _resolution, _connections) {
        this._brand = _brand;
        this._size = _size;
        this._resolution = _resolution;
        this._connections = _connections;
    }
    Television.prototype.turnOn = function () {
        var _a = this, _brand = _a._brand, _size = _a._size, _resolution = _a._resolution, _connections = _a._connections;
        console.log(_brand, _size, _resolution, _connections);
    };
    Object.defineProperty(Television.prototype, "connectedTo", {
        get: function () {
            return this._connectedTo;
        },
        set: function (value) {
            if (this._connections.some(function (connection) { return connection === value; })) {
                this._connectedTo = value;
            }
            else {
                console.log('Sorry, connection unavailable');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Television;
}());
var tv1 = new Television('samsung', 40, 1080, ['hdmi', 'vga', 'ethernet', 'usb']);
tv1.turnOn();
console.log(tv1.connectedTo);
tv1.connectedTo = 'hdmi';
console.log(tv1.connectedTo);
tv1.connectedTo = 'hd';
console.log(tv1.connectedTo);
