"use strict";
var Person = /** @class */ (function () {
    function Person(n, h, w) {
        console.log("Creating person ".concat(n));
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    Person.prototype.sleep = function () {
        console.log("".concat(this.name, ": zzzzzzz"));
    };
    return Person;
}());
var p1 = new Person('Maria', 171, 58);
var p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/ 
