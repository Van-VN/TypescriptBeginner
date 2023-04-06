enum Role {
  ADMIN = 1,
  USER,
}

export class User {
  role: Role;
  protected name: string;
  protected email: string;
  constructor(name: string, email: string, role: Role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  setName(input: string) {
    this.name = input;
  }

  setEmail(input: string) {
    this.email = input;
  }
}

export class UserMNG {
  private users: User[] = [];
  constructor() {}
  add(user: User) {
    this.users.push(user);
  }
  getInfo() {
    return this.users;
  }
  isAdmin(user: User) {
    if (user.role === 1) {
      return (`User ${user.getName()} is an Admin`);
    } else {
      return (`User ${user.getName()} is not an Admin`);
    }
  }
}

let manager = new UserMNG();
let user1 = new User("Nguyễn Văn A", "nvana@gmail.com", Role.USER);
let user2 = new User("Trần Đình B", "tdinhb@gmail.com", Role.ADMIN);
let user3 = new User("Phạm Trường C", "ptruongc@gmail.com", Role.USER);
let user4 = new User("Vũ Phi D", "vphid@gmail.com", Role.ADMIN);
let user5 = new User("Lê Hoàng E", "lhoange@gmail.com", Role.ADMIN);

manager.add(user1);
manager.add(user2);
manager.add(user3);
console.log(manager.getInfo());
manager.add(user4);
manager.add(user5);
console.log(manager.getInfo());
console.log(manager.isAdmin(user4));
console.log(manager.isAdmin(user1));