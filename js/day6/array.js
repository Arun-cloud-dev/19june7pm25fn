let fruits = ["apple", "Banana", "Orange"];



console.log(fruits[0]);
console.log(fruits[2]);


// 0 = 1
// 1 = 2

fruits.push("Mango")

console.log(fruits);


fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Pineapple")
console.log(fruits);






let number = [1, 2, 3];


let doubbled = number.map(num => num * 2);
console.log(doubbled);



let ages = [12, 17, 25, 30];

let adults = ages.filter(age => age >= 18);

console.log(adults);


let sum = number.reduce((total, num) => total + num, 0)

console.log(sum);


ages.forEach(age=> {
    console.log(age * 3);
})



let matrix = [
    [1, 2, 3], //=0
    [4, [12,13,15], 6],//=1
    [7, 8, [0,23,45,[555,666,777]]],//=2
    
]


console.log(matrix[2][2][3][2]);