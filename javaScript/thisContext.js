//arrow function and regular function

//Every function in hav access to this keyword.But arrow function doest have 
//  their own this so the take it from its lexical encolising enviornment

const person = {
    name: 'Ramu',
    greet: function () {
        setTimeout(function () {
            console.log(this.name);

        }, 1000)
        setTimeout(() => {
            console.log(this.name);

        }, 1000)
    }
}

person.greet()