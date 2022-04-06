"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(_registration, _name, _gradeTests, _gradeSchoolWorks) {
        this._registration = _registration;
        this._name = _name;
        this._gradeTests = _gradeTests;
        this._gradeSchoolWorks = _gradeSchoolWorks;
    }
    Object.defineProperty(Student.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (value) {
            this._registration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "gradeTests", {
        get: function () {
            return this._gradeTests;
        },
        set: function (value) {
            if (value.length === 4) {
                this._gradeTests = value;
            }
            else {
                throw new Error('Students must have 4 grades for tests. Use "0" for tests not done yet');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "gradeSchoolWorks", {
        get: function () {
            return this._gradeSchoolWorks;
        },
        set: function (value) {
            if (value.length === 2) {
                this._gradeSchoolWorks = value;
            }
            else {
                throw new Error('Students must have 2 grades for schoolworks. Use "0" for schoolwork not done yet');
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        return __spreadArray(__spreadArray([], this._gradeSchoolWorks, true), this._gradeTests, true).reduce(function (acc, cur) { return acc + cur; }, 0);
    };
    Student.prototype.averageGrade = function () {
        return (this.sumGrades() / (this._gradeSchoolWorks.length + this._gradeTests.length)).toFixed(2);
    };
    return Student;
}());
;
var student = new Student('0001', 'Braien', [9, 9, 9, 9], [8, 8]);
student.gradeSchoolWorks = [10, 8];
console.log(student);
