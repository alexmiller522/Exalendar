const { RSA_X931_PADDING } = require("constants");
const { rawListeners } = require("process");

const readline = require('readline');
const r1 = readline.createInterface({input : process.stdin, 
                output : process.stdout});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// First Comment, horray!
/*
`` uses the key to the left of 1, supports formatted literals (see below)
'' uses single quotations, ignores all formatting
*/
r1.question(`what is ${ num1 } + ${ num2 }? \n`, 
(userInput)=>{
    // console.log(userInput);
    if(userInput.trim() == answer){
        r1.close();
    }
    else {
        r1.setPrompt('Incorrect, please try again\n');
        r1.prompt();
        // Start loop
        r1.on('line', (userInput)=>{
            if(userInput.trim() == answer){
                r1.close();
            }
            else{
                r1.setPrompt(`Your answer of ${ userInput } is incorrect, try again\n`)
                r1.prompt();
            }
        });
        // End loop
    }
});

r1.on('close', ()=>{
    console.log('Correct!');
});