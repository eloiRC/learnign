import { error, log } from "node:console"
import fs from "node:fs/promises"

//!codigo async await paralelo, mes rapid es llegeixen els dos arxius en paralel

Promise.all([
    fs.readFile("./archivo.txt", 'utf-8'),
    fs.readFile("./archivo2.txt", 'utf-8')
]).then(([text,secondText])=>{
    console.log(text);
    console.log(secondText);
})

    




