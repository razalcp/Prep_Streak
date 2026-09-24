const user = {
    name: 'Razal',
    password: 'Secure321',
    age: 22
};

//Proxy is an object that intercepts and customize the operations performed on an object

const handler = {
    get: function (target, property) {
        if (property === 'password') {
            throw new Error('Access Denied')
        }
        return target[property]
    },
    set(target, property, value, receiver) {
        //reciver parameter says that through which proxy the original object was accessed a modified
        //We can have multiple proxies doing operations on same object.

        console.log("The propery is been updated through this proxy object ---------> ", receiver);

        target[property] = value
    },
    deleteProperty(target, property) {
        return delete target[property]
    },
    has(target, property) {
        return property in target
    }
}

const secureUserProxy = new Proxy(user, handler)

console.log(secureUserProxy.name);
// console.log(secureUserProxy.password);

secureUserProxy.age = 30
console.log(secureUserProxy.age);

console.log("name" in secureUserProxy);
delete secureUserProxy.name
console.log("name" in secureUserProxy);




