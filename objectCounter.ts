export class Application {
  name: string;
  static count: number = 0;
  constructor(name: string) {
      this.name = name;
      Application.count++;
  }
}

console.log(Application.count);
let app1 = new Application('App1');
console.log(Application.count);
let app2 = new Application('App2');
let app3 = new Application('App3');
let app4 = new Application('App4');
console.log(Application.count);
