/*
// constructor function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
} 

Person.prototypegetBirthYear = function() {
    return ``
}
*/
//Class
class Person {
    constructor (firstName, lastName, dob) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object
const person1 = new Person('John', 'Doe', '8-5-2000');
const person2 = new Person('Mary', 'Smith', '8-5-2001');

console.log(person2.getFullName());
console.log(person1);