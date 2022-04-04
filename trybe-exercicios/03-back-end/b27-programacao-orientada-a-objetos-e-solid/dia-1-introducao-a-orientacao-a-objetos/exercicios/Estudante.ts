class Student {
  constructor(
    private _registration: string,
    private _name: string,
    private _gradeTests: number[],
    private _gradeSchoolWorks: number[],
  ) {}

  get registration() {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get gradeTests() {
    return this._gradeTests;
  }

  set gradeTests(value: number[]) {
    if (value.length === 4) {
      this._gradeTests = value;
    } else {
      throw new Error('Students must have 4 grades for tests. Use "0" for tests not done yet');
    }
  }

  get gradeSchoolWorks() {
    return this._gradeSchoolWorks;
  }

  set gradeSchoolWorks(value: number[]) {
    if (value.length === 2) {
      this._gradeSchoolWorks = value;
    } else {
      throw new Error('Students must have 2 grades for schoolworks. Use "0" for schoolwork not done yet');
    }
  }

  sumGrades() {
    return [...this._gradeSchoolWorks, ...this._gradeTests].reduce((acc, cur) => acc + cur, 0);
  }

  averageGrade() {
    return (this.sumGrades()/(this._gradeSchoolWorks.length + this._gradeTests.length)).toFixed(2);
  }
};

const student = new Student('0001', 'Braien', [9,9,9,9], [8,8]);
student.gradeSchoolWorks = [10,8];
console.log(student);