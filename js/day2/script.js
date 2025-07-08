// var 
// let 
// const 

// var oldName = "Arun";

// var oldName = "25"

// let age = 25;

// {
//     let age = 45;  
//     console.log(age); // 45
// }
// let age;

// age = 25; // Global scope



// const country = "India"; // Global scope`;

// {
//     const country = "USA"; // Block scope

// }

// console.log(country);





// let city ; // Global scope
// console.log(city);



// city = "Bangalore"; // Reassigning the variable
// console.log(city);



// const pi = 3.14; // Constant value

// pi = 3.14159; // This will throw an error because pi is a constant`
// console.log(pi); // Uncommenting this line will throw an error
 

// const ar = "Arun"; // Global scope
// const Ar = "Arun"; // Global scope

// string 


let aeru = `arun`; 

console.log(aeru);



let age = 25;

let price = 40.5;



let binumber = 81890273490871234762349871239048721390478n;

console.log(binumber + 1n);



let isOnline = 1;
let isOffline = false;


console.log(typeof isOnline); // booleanl
console.log(typeof isOffline); // boolean






let score;

score = 100;

console.log(typeof score);




let result = null;

{
    let result = "arun ";
    console.log(result);
}


console.log(typeof result); // object (this is a known JavaScript quirk)





// let id = Symbol("id");

// console.log(id);



let person = {
    name: "Arun",
    age: 25,
}

console.log(person.age);








// let id = Symbol("1");
// let id2 = Symbol("1");

// console.log(id === id2); 


// let user = {
//     name: "Arun",
//     age: 25,
// };


// let id = Symbol("id");
// user[id] = 123;




// let admin = {
//     name: "Admin",
//     age: 30,
// }
// let di = Symbol("admin");
// admin[id] = 456;



// console.log(admin);



let user = {
    name: "Arun",
}


//library a 

let id1 = Symbol("id");
user[id1] = 101;



//libray2

let id2 = Symbol("id");
user[id2] = 202;


console.log(user);









let a = 20;
let b = 2;



let c = a + b;
console.log(c); // 3


let d = a - b;
console.log(d); // -1

let e = a * b;
console.log(e); // 2


let f = a / b;
console.log(f); // 0.5

let g = a % b;
console.log(g); // 1

let h = a ** b;
console.log(h); // 2^2 = 4
