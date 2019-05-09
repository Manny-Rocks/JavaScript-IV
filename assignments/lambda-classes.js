// CODE here for your Lambda Classes




class Person {
    constructor(personfeatures) {
      this.name = personfeatures.name;
      this.age = personfeatures.age;
      this.location = personfeatures.location;
      this.gender = personfeatures.gender;
    }
    speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
  }
  
  
  
  
  
  
  
  class Instructor extends Person {
    constructor(instructorfeatures) {
      super(instructorfeatures);
      this.specialty = instructorfeatures.specialty;
      this.favLanguage = instructorfeatures.favLanguage;
      this.catchPhrase = instructorfeatures.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    
    changeGrade(student) {
        student.grade = student.grade + Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100);
        if (student.grade < 1) {
          student.grade = 1;
        }
        if (student.grade > 100) {
          student.grade = 100;
        }
        console.log(`${student.name}'s grade is now ${student.grade}`);
      }
  }








  class Student extends Person {
    constructor(studentfeattures) {
      super(studentfeattures);
      this.previousBackground = studentfeattures.previousBackground;
      this.className = studentfeattures.className;
      this.favSubjects = studentfeattures.favSubjects;
      this.grade = Math.floor(Math.random() * 100);
    }
    listsSubjects() {
      this.favSubjects.forEach(function(x) {
        console.log(x);
      });
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprint(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate() {
      if (this.grade > 70) {
        console.log(`${this.name} graduated with a ${this.grade}%!`);
        return true;
      }
      else {
        return false;
      }
    }
  }
  class ProjectManager extends Instructor {
    constructor(pmAttrs) {
      super(pmAttrs);
      this.gradClassName = pmAttrs.gradClassName;
      this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
  }
  
  const Manny = new Student({
    name: 'Manny',
    age: 25.52,
    location: 'Maryland',
    gender: 'M',
    previousBackground: 'some community college',
    className: 'WEB20',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });
  const Jamie = new ProjectManager({
    name: 'Jamie',
    age: 25,
    location: 'NYC',
    gender: 'M',
    specialty: 'being a broke actor',
    favLanguage: 'love',
    catchPhrase: 'babe, voldemort',
    gradClassName: 'WEB16',
    favInstructor: 'Josh Knell'
  });
  
  Manny.speak();
  Manny.listsSubjects();
  Manny.PRAssignment('higher order functions');
  Manny.sprint('Advanced CSS')
  Jamie.speak();
  Jamie.demo('dirty dancing');
  Jamie.grade(Manny, 'impressing the ladies');
  Jamie.standUp('WEB20ELP');
  Jamie.debugsCode(Manny, '5/9/19');
  
  while (!Manny.graduate()) {
    Jamie.changeGrade(Manny);
  }