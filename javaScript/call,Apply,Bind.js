const user1 = {
    name: "Razal",
    age: 25
};

const user2 = {
    name: "John",
    age: 30
};

function introduce(greeting, company, role) {
    console.log(`${greeting}, I am ${this.name}. I am 25 years old. I work at ${company} as a ${role}.`);

}

introduce.call(user1, 'Hello', 'Google', 'Devops Engineer')
introduce.apply(user2, ['Hey', 'Oracle', 'Solution Architect'])
const hola = introduce.bind(user2)
hola('watsupp', 'Tesla', 'Trauma engineer')