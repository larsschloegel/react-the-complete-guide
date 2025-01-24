import './App.css'

function App() {
  let person = {
    firstName: "Bob",
    lastName: "Loblaw",
    address: {
      street: "123 Fake St",
      city: "Emberton",
      state: "NJ"
    }
  }

  function giveAwesomePowers(person) {
    person.specialPower = "invisibility";
    return person;
  }

  function giveAwesomePowersWithNoEffectOnSourceObject(person) {
    let newPerson = {
      ...person,
      specialPower: 'invisibility'
    }
  
    return newPerson;
  }

  // Initially, Bob has no powers :(
console.log(person);

// Then we call our function...
let samePerson = giveAwesomePowersWithNoEffectOnSourceObject(person);

// Now Bob has powers!
console.log(person);
console.log(samePerson);

// He's the same person in every other respect, though.
console.log('Are they the same?', person === samePerson); // true

  return (
    <div></div>
  )
}

export default App
