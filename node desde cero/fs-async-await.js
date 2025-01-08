import { error, log } from "node:console"
import fs from "node:fs/promises"


// !codigo async await  

    console.log('Leyendo primer archivo...');
    const text = await fs.readFile("./archivo.txt", 'utf-8')
   
   console.log(text);
   
    console.log('Leyendo segundo archivo...');
    const secondText = await fs.readFile("./archivo2.txt", 'utf-8')
   
    console.log(secondText);




