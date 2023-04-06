export class Instructor {
  name: string;
  role: string;
  // role;
  constructor({ name = "default name", role = "assistant" } = {}) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name} - ${this.role}`);
  }

  static helloworld() {
    console.log("Hello there");
  }

  static canTeach(instructor : Instructor) {
    return (instructor.role === "classroom");
  }
}

let juniorInstructor = new Instructor({ name: "Brian" });
let seniorInstructor = new Instructor({ name: "Alice", role: "classroom" });

juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloworld();
console.log(Instructor.canTeach(juniorInstructor));
