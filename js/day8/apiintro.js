// fetch("https://api.github.com/users/arun-cloud-dev/followers")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));

async function getUser() {
  try {
    let res = await fetch("https://api.github.com/users/arun-cloud-dev/followers");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getUser();
