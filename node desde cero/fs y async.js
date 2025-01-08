import { error, log } from "node:console"
import fs from "node:fs"

 const stats = fs.statSync('./archivo.txt')

 console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
 );

// !codigo syncrono

// console.log('Leyendo primer archivo...');
//  const text = fs.readFileSync("./archivo.txt", 'utf-8')

// console.log(text);

//  console.log('Leyendo segundo archivo...');
//  const secondText = fs.readFileSync("./archivo2.txt", 'utf-8')

//  console.log(secondText); 


 //! codi asyncrono
 console.log('Leyendo primer archivo...');
fs.readFile("./archivo.txt", 'utf-8',(err, text) => {
    console.log(text);
})

console.log('hacer cosas mientras se ejecuta el codigo async');


 console.log('Leyendo segundo archivo...');
fs.readFile("./archivo2.txt", 'utf-8', (err, text) => {
    console.log(text);
})

console.log('hacer mas cosas mientras se ejecuta el codigo async 2');


// ! escito con promises
// flataria anadir /promises al import
// fs.readFile("./archivo2.txt", 'utf-8')
//     .then( text =>{
//         console.log(' texto por segunda vez con promises', text);
//     }
//     )



