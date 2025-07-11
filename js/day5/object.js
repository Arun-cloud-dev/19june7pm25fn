// let person = {
//     name: "ar",
//     age: 25,
//     city:"chennai"
// }


// console.log(person.name);

// console.log(person.age);

// let car = {
//     brand: "toyo",
//     model: "Innova",
//     start: function () {
//         console.log("car Started");
//     }
// };


// console.log(car.brand);


// console.log(car.start);

// car.start()



// let user = {
//     name: "Arun",
//     Place: "chennai",
//     age: 34,
// }



// let { name, Place } = user;


// console.log(age);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
        
//     }
// }


// let student = new Person("Arun", 38);

// student.greet();


// function Animal(name) {
//     this.name = name
// }



// Animal.prototype.speak = function () {
//     console.log(`${this.name} makes a sound.`);
// }

// let dog = new Animal("Dog")
// dog.speak();


// function Animal(name) {
//     this.name = name 
// }



// new Animal("dog");





class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound `);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let myDog = new Dog("Tommy");


myDog.speak();



