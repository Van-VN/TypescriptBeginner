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
  id: number;
  phoneNum: string;
  constructor(
    name: string,
    gender: Gender,
    dob: Date,
    email: string,
    id: number,
    phoneNum?: string
  ) {
    this.name = name;
    this.gender = gender;
    this.dob = dob;
    this.id = id;
    this.email = email;
    this.phoneNum = phoneNum;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

export class Manager {
  employeeList: Employee[] = [];
  constructor() {}

  add(employee: Employee) {
    this.employeeList.push(employee);
  }
  getList(): Employee[] {
    return this.employeeList;
  }
  getID(ID: number) {
    let i = -1;
    this.employeeList.forEach((employee, index) => {
      if (employee.id === ID) {
        i = index;
      }
    });
    return i;
  }
  delete(ID: number) {
    if (this.getID(ID) !== -1) {
      this.employeeList.splice(this.getID(ID), 1);
    }
  }
}

let employee1 = new Employee(
  "A",
  Gender.MALE,
  new Date("1/1/2023"),
  "a@gmail.com",
  1,
  "0123445"
);
let employee2 = new Employee(
  "B",
  Gender.FEMALE,
  new Date("2/1/2023"),
  "b@gmail.com",
  2
);
let employee3 = new Employee(
  "C",
  Gender.OTHER,
  new Date("3/1/2023"),
  "c@gmail.com",
  3,
  "0999000"
);

let boss = new Manager();
boss.add(employee1);
boss.add(employee2);
boss.add(employee3);
console.log(`Hiển thị danh sách nhân viên: `);
console.log(boss.getList());
console.log('Tìm index của nhân viên theo ID: ' + boss.getID(3));
console.log(`Xóa nhân viên với iD 3`);
boss.delete(3);
console.log('Hiển thị lại danh sách nhân viên mới sau khi xóa: ');
console.log(boss.getList());
