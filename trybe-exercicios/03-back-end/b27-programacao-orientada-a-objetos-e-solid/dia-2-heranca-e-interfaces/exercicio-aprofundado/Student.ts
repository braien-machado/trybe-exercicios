import Person from './Person'

export default class Student extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = Student.generateEnrollment();
  }

  private static generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    Student.validateEnrollment(value);
    this._enrollment = value;
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    Student.validateExamsGrades(value);
    this._examsGrades = value;
  }

  public get worksGrades(): number[] {
    return this._worksGrades;
  }
  public set worksGrades(value: number[]) {
    Student.validateWorksGrades(value);
    this._worksGrades = value;
  }

  public sumGrades() {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((acc, cur) => acc + cur, 0);
  }

  public sumAverageGrade(){
    const sumGrades = this.sumGrades();
    return parseFloat((sumGrades / ([...this._examsGrades, ...this._worksGrades]
      .length)).toFixed(2));
  }

  private static validateEnrollment(value: string) {
    if (value.length < 16) throw new Error('enrollment must have at least 16 characters.');
  }
  private static validateExamsGrades(value: number[]) {
    if (value.length > 4) throw new Error('there can be only 4 exams grades');
  }
  private static validateWorksGrades(value: number[]) {
    if (value.length > 2) throw new Error('there can be only 2 exams grades');
  }
}
