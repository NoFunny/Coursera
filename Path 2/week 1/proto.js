var person = {
  type: 'person'
}
var danny = {
  name: 'Danny',
  type: undefined
}
Object.setPrototypeOf(danny, person);
console.log(person.name);
