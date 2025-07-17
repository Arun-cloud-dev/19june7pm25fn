// function outer() {
//     let name = "Besant Tech"; //local scoped 

//     function inner() {
//         console.log("heelo , "+ name); //inner uses the outer variable 
//     }

//     return inner
// }

// let greet = outer()
// greet()


// function greet(name, callback) {
//     console.log("hello" + name);
//     callback();
// }


// function sayBye() {
//     console.log("goodbye");
// }


// greet("arun",sayBye) 


// let promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("It worked!");
//   } else {
//     reject("It failed.");
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

 
// async function getData() {
//     try {
//         let response = await fetch("https://api.github.com/users/arun-cloud-dev/followers")
//         let data = await response.json();
//         console.log(data);


//     } catch (err) {
//         console.log("This an error link ");
//     } finally {
//         console.log("the data pulling is going on from the api ");
//     }
// }

// getData()




// let name = "besant "


// console.log(` Hello arun  ${name}`);


// let person = { name: "Arun", age: 25, place: "chennai", };

// console.log(person.name);

// const { name, age, place } = person // desctructuring an  object 



// console.log(age);
// console.log(place);




// function greet(name = "guest") {
//     console.log("heelo, " + name);
// }


// greet("arun besant ");


// let arr = [1, 2, 3, 4];

// let arr2 = [...arr, 5, 6, 7, 8,]


// console.log(arr2);




// function sum(...arr) {
//     return arr.reduce((total, n) => total + n , 0)
// }


// console.log(sum(1,2,3));
