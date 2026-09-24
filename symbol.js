//introduced in ECHMA Script 2015
//symbols are new primitive datatype introduced in ES6, they are unique and immutable identifiers used primarly for
//unique object keys to avoid name collitions

const sym1=Symbol()
const sym2=Symbol('uniquekey')

console.log(sym1===sym2); //false


const sym3=Symbol('uniquekey')
const sym4=Symbol('uniquekey')

console.log(sym1===sym2); //false

const obj={
    sym1:'charlie',
    sym1:'Nolan',
    a:3,
    a:5
}
console.log(obj);
