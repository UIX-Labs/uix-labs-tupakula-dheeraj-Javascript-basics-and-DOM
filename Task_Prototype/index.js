//Write code for the 1st task below this

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
        console.log(`Hello, This is ${this.name} and I am ${this.age} years old.`)
    }
}

const person1 = new Person("jhon", 20)
person1.greet();

//Write your code above this line
//Write code for the 2nd task below this

class Student extends Person {
    constructor(name, age,studentId) {
    super(name,age)

    this.studentId = studentId;
  }
  study() {
    console.log(`${this.name}  with studentId ${this.studentId} is studing.`)
  }
}

const student1 = new Student("Ravi", 18, 203 );
student1.study();


//Write your code above this line
//Write code for the 3rd task below this

Person.prototype.introduce = function() {
  console.log(`Hi, I'm ${this.name}. Nice to meet you!`);
};

console.log(person1.introduce());

//Write your code above this line
//Write code for the 4th task below this
Student.prototype.greet = function() {
    console.log(`Hello, ${this.name} this is the override  method.`)
}
console.log(student1.greet());

//Write your code above this line
//Write code for the 5th task below this

class Employee {
    constructor(name,title) {
        this.name = name;
        this .title =title;
    }
}

const employee = new Employee("Jhon doe","Software developer")

console.log(employee.name);
console.log(employee.title);


//Write your code above this line


