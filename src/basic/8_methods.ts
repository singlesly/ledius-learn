(() => {
  class Student {
    name;
    salary;

    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }

    changeSalary(newSalary) {
      if (newSalary < 0) {
        this.salary = 0;
      } else {
        this.salary = newSalary;
      }
    }
  }

  let student = new Student('Arina', 2000);
  console.log(student);

  student.changeSalary(2500);
  console.log(student);

  student.changeSalary(-100);
  console.log(student);



})()
