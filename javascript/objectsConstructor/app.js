// Constructor function
var Person = function(name, reaOfBirth, job) {
  this.name = name;
  this.yearOfBirth = reaOfBirth;
  this.job = job;
}

// adding a prototype to the Person object
Person.prototype.calculateAge = function() {
  console.log(2017 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

// instances
var john = new Person('John', 1990, 'Teacher');
var jane = new Person('jane', 1959, 'Designer');
var mark = new Person('John', 1978, 'Teacher');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.__proto__ === Person.prototype);
console.log('--------------------------');
console.log(jane);
console.log('--------------------------');
console.log("Has a john property of Job? = " + john.hasOwnProperty('job'));
console.log("Has a john property of last name? = " + john.hasOwnProperty('lastName'));
console.log('--------------------------');
console.log("john instance of Person object= " + john instanceof Person);
console.log('--------------------------');
console.info(Person)
console.log('--------------------------');
var x = [1,2,3,4,5,6,7,8];
console.log(x)

