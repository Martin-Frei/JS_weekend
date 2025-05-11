// complete the challenge here 👇


let numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41];
let countOdd = 0 ;
let countEven = 0;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] %2 == 0){
        countEven++
    }else{
        countOdd++
    }    
};
console.log(`Even Nnumbers: ${countEven}`);
console.log(`Odd Nnumbers: ${countOdd}`);

let lowCount = 0;
let mediumCount = 0;
let highCount = 0;

for (let index = 0; index < numbers.length; index++) {
    const elem = numbers[index];
    if(elem < 30){
        lowCount++
    }if (elem < 71) {
        mediumCount++
    } else {
        highCount++        
    }
};
console.log(` Low Numbers: ${lowCount}`);
console.log(` Medium Numbers: ${mediumCount}`);
console.log(` High Numbers: ${highCount}`);


let numbersSum = 0;
let countSum = 0;

for (let index = 0; index < numbers.length; index++) {
    const elem = numbers[index];
    numbersSum = numbersSum + elem;
    countSum++
};
console.log(`Sum: ${numbersSum}`)
console.log(`Average: ${numbersSum / countSum}`);
