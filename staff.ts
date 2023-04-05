enum Gender {
  male,
  female,
  other,
}

export class Staff {
  name: string;
  gender: Gender = Gender.female;
  DoB: Date;
  email: string;
  phoneNum?: string;
  constructor(
    name: string,
    gender: Gender,
    dob: Date,
    email: string,
    phone: string
  ) {
    this.name = name;
    this.gender = gender;
    this.DoB = dob;
    this.email = email;
    this.phoneNum = phone;
  }
}

function showStaff(display: Staff) {
    console.log(display);
}

let staffList: Staff[] = [];

staffList.push(
  new Staff(
    "Nguyen Van A",
    Gender.male,
    new Date("1990-09-19"),
    "anguyen@gmail.com",
    "0123456789"
  )
);
staffList.push(
  new Staff(
    "Tran Thi A",
    Gender.female,
    new Date("1991-10-12"),
    "btran@gmail.com",
    "0123456790"
  )
);
staffList.push(
  new Staff(
    "Huynh An Nhien",
    Gender.other,
    new Date("1990-09-19"),
    "nhienhuynh@gmail.com",
    "0123456791"
  )
);

staffList.forEach(showStaff);