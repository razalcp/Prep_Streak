// Practice Exercise: Write a function that accepts a callback. If the input is negative, call
// the callback with an error. If positive, call it with 
// null and the doubled value.

function doubleNumber(number,callback){
    if(number<0){
        callback(new Error("Number is negative, cant double"))
        return
    }
    callback(null,number*2)
}

// doubleNumber(5,(err,data)=>{
//     console.log("Is there error -> ",err);
    
//     console.log("Doubled result: ",data)
// });

doubleNumber(-5,(err,data)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(data);
    
})



// Interview Scenario: “Why does 
// fs.readFile put the error object first in its callback?
// What happens if I don’t handle it?”