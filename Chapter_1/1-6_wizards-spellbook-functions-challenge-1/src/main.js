// complete the challenge here 👇



function createPotion(
    baseIngredients = "water", 
    catalystIngredient = "moonstone dust",
    powerBooster = "dragon breath"){
        return `A mystical brew of ${baseIngredients}, ${catalystIngredient} and ${powerBooster}!`
    }

    console.log(createPotion())
    console.log(createPotion("witch hazel"))
    console.log(createPotion("toadstool extract", "pixie wings"))
    console.log(createPotion("shadow essence", "vampire tears", "phoenix ash"))



function castCharm(name = "my Master") {
    return `May luck and fortune smile upon ${name}`
}

console.log(castCharm())
console.log(castCharm("Elara the Elf"))



let calculateSpellPower = (age)=> age * 10
console.log(`Spell Power:  ` +  calculateSpellPower(25))


let castFireball = (power) => `Fireball blazes with power ${power}!`
let summonWaterSpout = (power) => `Water spout surges with power ${power}!`
let callLightning = (power) => `Lightning strikes with power ${power}!`


let elementalSpells = [
    castFireball,
    summonWaterSpout,
    callLightning
]


for (let index = 0; index < elementalSpells.length; index++) {
    let element = elementalSpells[index];
    console.log(element(Number(index)+1))
    
}



function determineSpellStrength(powerLevel) {
    if (powerLevel < 51) {
        return "Power is Weak !!"
    }if (powerLevel < 101) {
        return "Power Level Moderate !!"
    } else {return "Power Level is Strong !!"
        
    }
}


console.log(determineSpellStrength(10))



