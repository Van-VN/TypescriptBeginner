export class Personel {
  private _firstName: string;
  private _lastName: string;
  private _dob: Date;
  private _address: string;
  private _positition: string;
  _id: number;

  constructor(
    firstName: string,
    lastName: string,
    dob: Date,
    address: string,
    positition: string,
    id: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._dob = dob;
    this._address = address;
    this._positition = positition;
    this._id = id;
  }

  getFullName() {
    return `${this._firstName} + ${this._lastName}`;
  }

  getFirstName(): string {
    return this._firstName;
  }

  setFirstName(firstName: string) {
    this._firstName = firstName;
  }

  getLastName(): string {
    return this._lastName;
  }

  setLastName(lastName: string) {
    this._lastName = lastName;
  }

  getDob(): Date {
    return this._dob;
  }

  setDob(dob: Date) {
    this._dob = dob;
  }

  getAddress(): string {
    return this._address;
  }

  setAddress(address: string) {
    this._address = address;
  }

  getPositition(): string {
    return this._positition;
  }

  setPositition(positition: string) {
    this._positition = positition;
  }
}

class PersonelManager {
  static personelGroup: Personel[] = [];
  constructor() {}

  add(person: Personel) {
    PersonelManager.personelGroup.push(person);
  }
  display() {
    return PersonelManager.personelGroup;
  }

  getID(id: number) {
    let i = -1;
    PersonelManager.personelGroup.forEach((employee, index) => {
      if (employee._id === id) {
        i = index;
      }
    });
    return i;
  }

  delete(id: number) {
    if (this.getID(id) !== -1) {
      PersonelManager.personelGroup.splice(this.getID(id), 1);
    }
  }
}

let boss = new PersonelManager();
let personel1 = new Personel(
  "A",
  "Nguyễn",
  new Date("2023/08/01"),
  "Hà Nội",
  "Quản lý",
  11
);
let personel2 = new Personel(
  "B",
  "Trần",
  new Date("2/1/2023"),
  "Hà Đông",
  "Giám Đốc",
  22
);
let personel3 = new Personel(
  "C",
  "Phạm",
  new Date("3/1/2023"),
  "Hà Tây",
  "Phó Phòng",
  33
);
let personel4 = new Personel(
  "D",
  "Vũ",
  new Date("4/1/2023"),
  "Hà Nam",
  "Bàn Phó",
  44
);
let personel5 = new Personel(
  "E",
  "Phan",
  new Date("5/1/2023"),
  "Hà Giang",
  "Bàn Trưởng",
  55
);
let personel6 = new Personel(
  "F",
  "Hà",
  new Date("6/1/2023"),
  "Hà Cầu",
  "Trưởng Phòng",
  66
);
let personel7 = new Personel(
  "G",
  "Lê",
  new Date("7/1/2023"),
  "Hà Bắc",
  "Bảo Vệ",
  77
);

boss.add(personel1);
boss.add(personel2);
boss.add(personel3);
boss.add(personel4);
boss.add(personel5);
boss.add(personel6);
boss.add(personel7);
console.table(boss.display());
console.log("Index nhân sự với ID44");
console.log(boss.getID(44));
console.log("Xóa nhân sự với ID44, ID66");
boss.delete(44);
boss.delete(66);
console.log("Hiển thị danh sách nhân sự mới: ");
console.table(boss.display());
