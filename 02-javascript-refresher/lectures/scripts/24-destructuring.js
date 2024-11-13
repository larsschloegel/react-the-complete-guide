/*
acces on array without Destructuring
 */
const userNameData = ["Max", "Mustermann"];

const firstName = userNameData[0];
const lastName = userNameData[1];
console.log(firstName)
console.log(lastName)

/*
acces on array with Destructuring, variable names can be freely selected
*/
const [firstname, lastname] = ["Greta", "Musterfrau"];
console.log(firstname)
console.log(lastname);

/*
access on object without Destructuring.
*/
const animal = {
    name: "cat",
    superfamily: "feloidea"
}
const name = animal.name;
const superfamily = animal.superfamily;
console.log(name)
console.log(superfamily)

/*
access on object with Destructuring. alias allowed
*/
const {name: animalName, superfamily: animalFamily} = {
    name: "lion",
    superfamily: "feloidea"
}
console.log(animalName)
console.log(animalFamily)

