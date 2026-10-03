const {spawn}=require('child_process')


// const child =spawn('node',['fsModule.js'])
const child=spawn('python',['sum.py'])

child.stdout.on('data',(data)=>{
    console.log(data.toString());
    
})
child.stderr.on('error',(err)=>{
    console.log(err);
    
})
child.on('exit',(code)=>{
    console.log('Process exited with code : ',code);
    
})

