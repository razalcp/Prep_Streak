// let a = 12
// let b = "Viswa"

// let c = [1, 2, 3, 4, 5]
// let d = {
//     name: 'John',
//     age: 55
// }

// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));

// console.log(typeof (null));
// console.log(typeof (undefined));



// const a="dd"

// const b=parseInt(a)
// console.log(typeof(b));

// console.log(typeof(parseInt(a)))

// const str=`My name is chacko,
// I am from kerala,
// and i am 25 years old`

// console.log(str);

// let a=25
// let b=3
// console.log(`The number are ${a} and ${b}`);
// console.log(`The sum is ${a+b}`);

//tagged template
// function tag(string, ...values) {
//     console.log(string);
//     console.log(values);

// }

// tag`My name is ${'John'} and i am ${25} years of old `

//spread
// const arr1=[1,2,3]
// const arr2=[4,5,6]

// const [a,b,c]=arr1
// console.log(a,b,c);
// without spread 
// console.log([arr1,arr2]);

// console.log(...arr1);

// function add(...d){
//     console.log(d);

//     return d.reduce((acc,curr)=>{
//         return acc=acc+curr
//     },acc=0)
// }
// let numbers=[1,2,3,5,6]

// console.log(add(...numbers));


//shallow copy

//first understand this if we assign an non-primitive like object or array to another variable, the other varible holds the reference

// const a = {
//     name: "Razal",
//     age: 25
// }
// varible a does not contain the object itself , it contains the refernce of the object,
//So when you assign it to another variable since a contains the reference the reference of the object is copied.

// const b = a
// b.age = 31
// console.log(a)
// console.log(b);

// const copy={...a}

// copy.age=100

// console.log(a);
// console.log(copy);


const user = {
    name: "Razal",
    age: 25,
    address: {
        city: "Kozhikode",
        country: "India"
    }
};

const user2 = { ...user }

console.log(user === user2);
console.log(user == user2);
console.log(user.address === user2.address);

user2.address.city = "Kochi"

console.log(user.address.city);
console.log(user.address.city);









