// complete the challenge here 👇

let garden = ['Tomato','Carrot','Lettuce','Cucumber','Pepper'];
console.log(`Initial garden: ${garden}`);

garden.push('Pumpkin');
garden.unshift('Sunflower');
console.log(`Updated garden: ${garden}`);
console.log(garden.length)


let harvestFirst = garden.splice(0,1)[0];
let harvestLast = garden.splice(-1)[0];
console.log(`Harvested: ${harvestFirst} and ${harvestLast}`)
console.log(`Updated garden: ${garden}`);

let indexGarden = garden.indexOf('Cucumber');
garden.splice(indexGarden,1,'Bell Pepper');
console.log(`Replaced plant at Index:  ${indexGarden}`);
console.log(`Garden after replacment: ${garden}`);

console.log(`Garden includes Weeds: ${garden.includes('Weeds')}`)

