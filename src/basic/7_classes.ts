(() => {
  let student = {
    firstName: 'Ivan',
    lastName: 'Petrov',
  };
  let student1 = {
    firstName: 'Ivan 1',
    lastName: 'Petrov 2 ',
  };
  let student2 = {
    firstName: 'Ivan 3',
    lastName: 'Petrov 4',
  };
  let student4 = {
    firstName: 'Ivan 6',
    lastName: 'Petrov 7',
  };

  class Student {
    firstName = 'Vasya';
    lastName = 'Olegov';

    constructor(name, last) {
      this.firstName = name;
      this.lastName = last;
    }
  }

  console.log(student2);

  let newStudent = new Student('Vasya', 'Olegov');
  let newStudent1 = new Student('Lenya', 'Babkov');
  console.log(newStudent);
  console.log(newStudent1);

  function FnStudent(name, last) {
    // Create
    let obj = {
      firstName: 'Ivan',
      lastName: 'Petrov',
    };

    // Fill
    obj.firstName = name;
    obj.lastName = last;

    // Return
    return obj;
  }

  let std = FnStudent('Marina', 'Oduvanchik');
  let std1 = FnStudent('Marina 1', 'Oduvanchik');
  console.log(std);
  console.log(std1);

})()
