const person = {
  firstName: 'Matheus',
  lastName: 'Sanders Montandon',
  hobby: 'ttrpg, worldbuilding, game-designing'
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName, '.');
person.job = 'Amazon Flex Worker';
console.log("The person's current job is:", person.job, '.');
person.previousJob = 'Student';
console.log("The person's previous job is:", person.previousJob, '.');
console.log('The complete person object:', person);
