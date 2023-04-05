enum Gender {
  FEMALE,
  MALE,
  OTHER,
}

export class Employee {
  name: string;
  gender: Gender;
  dob: Date;
  email: string;
  phoneNum?: string;
  constructor(
    name: string,
    gender: Gender,
    dob: Date,
    email: string,
    phoneNum: string
  ) {
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.phoneNum = phoneNum;
  }
}
