const person = {
  firstName: 'Nang',
  lastName: 'Tu',
  hobby: 'gaming',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Javascript Developer';
console.log("The person' current job is: ", person.job);

person['previousJob'] = 'Gamer';
console.log("The person' previous job is: ", person['previousJob']);

console.log(person);
