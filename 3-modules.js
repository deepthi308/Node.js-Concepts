// In Common Js, Every file is a module
// Modules - Encapsulated Code (Only shared minimum)

const persons = require("./4-persons");
const sayHi = require("./5-utils");

console.log(persons);

const { person1, person2, person3, person4, person5 } = persons

sayHi(person1);
sayHi(person2);
sayHi(person5);
sayHi(person3);
sayHi(person4);

// const personArray = Object.keys(persons)

// personArray.forEach((person) => {
//     sayHi({ person })
// })

const { personOne, items } = require("./6-arrayExport")


 
console.log(person1)
console.log(items)

items.forEach((item) => {
    console.log(item)
})


// Since this module has a function in it and also invoked that function inside the module when the module is required here . It will also execute the code here in this file
const moduleThatInvokedFuncInIt = require("./7-mind-grenade");