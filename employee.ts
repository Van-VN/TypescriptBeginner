export class Staff {
  name: string;
  email: string;
  age: number;
  constructor() {}
  getName() {
    return this.name;
  }
  setName(input: string) {
    this.name = input;
  }
  getEmail() {
    return this.email;
  }
  setEmail(input: string) {
    this.email = input;
  }
  getAge() {
    return this.age;
  }
  setAge(input: number) {
    this.age = input;
  }
  getInfo() {
      console.log(this.getName(), this.getEmail(), this.getAge());
  }
}

let firstStaff = new Staff();
firstStaff.setName("ABC");
firstStaff.setEmail("Email@abc.com");
firstStaff.setAge(20);
firstStaff.getInfo();
