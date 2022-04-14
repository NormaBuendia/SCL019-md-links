
// importo los modulos de node.js
const fs = require('fs');
const { existsSync } = require('fs')
const {readFile} = require('fs/promises')
const path = require('path');



//verifico existencia de ruta
const verifyExistence =(resp)=> existsSync(resp);
//para verificar si la ruta es absoluta
const pathAbsolute = (resp) => path.isAbsolute(resp);
//se  transforma a absoluta
const converToAbsolute = (resp) => path.resolve(resp);
//leer el archivo             ruta y codificacion
const fileRead = (resp) =>readFile(resp, 'utf8')
//verificar la extension del archivo 
const verifyExtension = (resp) =>(path.extname(resp)==='.md');

// funcion para saber si es un archivo que existe
const fileExistence = (resp) => fs.statSync(resp).isFile();
// funcion para saber si existe el directorio
const directoryExistence = (resp) => fs.lstatSync(resp).isDirectory();


    module.exports = {
    pathAbsolute,
    verifyExistence,
    verifyExtension, 
    fileExistence,
    converToAbsolute,
    directoryExistence,
    fileRead
    }




// fs.readFile('texto.txt', 'utf-8', (err, data) => {
//     if(err) {
//       console.log('error: ', err);
//     } else {
//       console.log(data);
//     }
//   })
