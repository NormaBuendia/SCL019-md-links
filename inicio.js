
// importo los modulos de node.js
const fs = require('fs');
const path = require('path')


//verifico existencia de ruta
const verifyExistence =(route)=> (fs.existsSync(route));
//verificar la extension del archivo 
const verifyExtension = (route) =>(path.extname(route)==='.md');
// funcion para saber si es un archivo 
// const file = (route) => fs.statSync(route);

//exports.verifyExistence = verifyExistence;
//exports.verifyExtension = verifyExtension;


module.exports = {
    verifyExistence,
    verifyExtension
}










// fs.readFile('texto.txt', 'utf-8', (err, data) => {
//     if(err) {
//       console.log('error: ', err);
//     } else {
//       console.log(data);
//     }
//   });
