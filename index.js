

const fs = require('fs');
const path = require('path');
const inicio = require('./inicio.js');
const colors = require('colors/safe');

//la llamo vacio para iniciar
let route ="";
// metodo de path que permite obtener ruta absoluta
const ruta = path.resolve(route)

const exist = inicio.verifyExistence;
// const verify = inicio.verifyExtension;

// se imprime en consola
process.stdout.write(colors.green('Ruta del archivo  que quiera revisar:\n'))
// puedo escribir en consola la data y la funcion me regresa la data a consola
process.stdin.on('data', function(data){
  //se almacena la data, y la convierto a string, con trim quito los caracteres de espacio y enter innecesarios
  route = data.toString().trim();
  //
  process.stdout.write(colors.red(`Hola soy la ruta ${route} \n`))
if(exist(route)){
  process.stdout.write(colors.blue('Existe! \n'));
  process.stdout.write(colors.yellow('Trasforma la ruta en absoluta \n'));
  process.stdout.write(colors.magenta(ruta + '\n'));
}else if(!exist(route)){
  process.stdout.write(colors.cyan('No existe'))
} 
// para salir del proceso
  process.exit()
})


 



// if( links.readMd(resp) ){
//   files= data.toString().trim();
//  process.stdout.write(colors.rainbow(`Links ${files} \n`))

// console.log('finalizo')
//  // process.exit(); 

// }














// module.exports = () => {
//   // ...
// };
// modulo para ver la ruta
// const path = require('path')
// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__filename));
// let fs = require('fs');
