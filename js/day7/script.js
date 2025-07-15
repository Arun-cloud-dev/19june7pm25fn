// try {
//     // Bl;ock of code that might fail . 
// } catch {
//     //runs if there is an error and tryes it 
// } finally {
//     //can run alwas even  there is error or not 
// }



// try {
//     let num = 10;
//     console.log(num / 3);
//     console.log(noDefinedVar);

// } catch (error) {
//     console.log("something went wrong " , error.message);
// } finally {
//     console.log("this always runs ");
// }

// let a;
// console.log(a);


let json = '{"name:"Arun Besqwant, "age":25}'


try {
  let user = JSON.parse(json);
  console.log(user.name); 
} catch (err) {
  console.log("Invalid JSON:", err.message);
} finally {
  console.log("Parsing attempt done.");
}


//https://api.github.com/users/arun-cloud-dev/followers



