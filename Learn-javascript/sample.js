const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question('Enter your name', (i)=>{
    console.log("your name is", i);
    input.close()
})
