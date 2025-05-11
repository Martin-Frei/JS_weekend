// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:
distanceTraveled =151


// 2. Resource Management:
let fuelReduction = (distanceTraveled * 5)/10
fuelLevel = fuelLevel - fuelReduction
console.log(`Fuel reductions: ${fuelReduction}, Current fuel level: ${fuelLevel}`)


console.log(` Fuel is low: ${fuelLevel <= 30}`)


// 3. Oxygen Consumption:

let consumedOxygen = crewMembers * distanceTraveled / 100
oxygenLevel -= consumedOxygen
console.log(` New Oxygen Level: ${oxygenLevel}`)
console.log(` Oxygen is low: ${oxygenLevel < 20}`)



// 4. Alien Encounters
let aliensEncounter = distanceTraveled % 2 !== 0
console.log(`Aliens Encounter: ${aliensEncounter}`)


// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
