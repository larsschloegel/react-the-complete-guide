const password = prompt("Please enter password")

const successMessage = 'correct password';
const errorMessage = 'Access not granted';
if (password === "Hello") {
    console.log(successMessage);
} else if (password === "hello") {
    console.log(successMessage);
} else {
    console.log(errorMessage)
}

const musicGenres = ["Rock", "Pop"]

for (const genre of musicGenres){
    console.log(genre);
}