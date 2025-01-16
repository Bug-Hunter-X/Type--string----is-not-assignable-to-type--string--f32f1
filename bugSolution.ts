function greeter(person: string | string[]) {
    if (Array.isArray(person)) {
        return "Hello, " + person.join(' ');
    } else {
        return "Hello, " + person;
    }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // This will now work correctly.
console.log(greeter("Jane Doe")); //This will also work correctly