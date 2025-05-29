// complete the challenge here 👇

let petSanctuary = {};

function createVirtualPet(name, species, mood) {
  return {
    name,
    species,
    mood,
  };
}

const pixel = createVirtualPet("Pixel", "dog", 0.8);
const bitsy = createVirtualPet("Bitsy", "cat", 0.6);
const data = createVirtualPet("Data", "fish", 0.5);

console.log(pixel);
console.log(bitsy);
console.log(data);

///////////////////////////////////////

function addToSanctuary(pet) {
  petSanctuary[pet.name] = pet;
}

addToSanctuary(pixel);
addToSanctuary(bitsy);
addToSanctuary(data);

console.log(petSanctuary);

//////////////////////////////////////
// function isPetInSanctuary(name){
//     if (name in petSanctuary) {
//         return `${name} is in sanctuary: true`
//     } else { return`${name} is in sanctuary: false`
//     }
// }

function isPetInSanctuary(name) {
  return `${name} is in sanctuary: ${name in petSanctuary}`;
}

console.log(isPetInSanctuary("Pixel"));
console.log(isPetInSanctuary("Glitch"));

////////////////////////////////////////
function generatePetReport(petSanctuary) {
  for (let name in petSanctuary) {
    let pet = petSanctuary[name];
    console.log(`${name}: Species: ${pet.species}, Mood: ${pet.mood}`);
  }
}
generatePetReport(petSanctuary);

////////////////////////////////////////
function findHappyPet(petSanctuary, mood) {
  let happyMood = [];
  for (let name in petSanctuary) {
    let happy = petSanctuary[name].mood;
    if (happy >= mood) {
      happyMood.push(name);
    }
  }
  console.log(happyMood);
  return happyMood;
}

findHappyPet(petSanctuary,0.7)