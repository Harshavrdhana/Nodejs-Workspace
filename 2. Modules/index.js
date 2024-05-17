const greet =module.require('./greet')
//const {person1,person2,person3}=module.require('./peoples')4
const person=module.require('./peoples')

greet(person.person3)