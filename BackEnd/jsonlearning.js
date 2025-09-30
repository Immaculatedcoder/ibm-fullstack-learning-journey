// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JSON object.


const names = ["Emmanuel", "Jerry", "Titi", "Immaculate"];

const person = {
    "name": "Emmanuel",
    "age": 26,
    "isEmployes": true,
    "hobbies": ["coding", "gamming", "cooking"]
}

// Convert to a JSON string
const jsonString = JSON.stringify(person);

console.log(jsonString);