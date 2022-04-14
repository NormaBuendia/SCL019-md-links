const fs = require('fs/promises');
const colors =require('colors')
// const{ readFile  }= require('fs');
const readline = require('readline');
const path = require('path');
const https = require('https');
const url = require('url');
const inicio = require('./inicio.js');
const { exit } = require('process');


//creo el input para que ingrese la ruta el usuario..se crea la interfaz
const inputRead = readline.createInterface(process.stdin,process.stdout)
   
inputRead.question('Ingresa tu ruta:\n', function (ruta){
        let resp =`${ruta}`;
        readMd(resp)
    })


//creo una funcion con promesa
const readMd =(resp) =>{
    //nueva promesa que tiene parametros , resolver o rechazar
    return new Promise((resolve, reject) =>{
        //array vacio para guardar links
        const newArray =[];
//si la ruta existe
    if (inicio.verifyExistence(resp)) {
        //si la ruta no es absoluta, la trasnformas a absoluta
        inicio.pathAbsolute(resp) === false ? resp = path.resolve(resp) : resp;
    } else {//si existe la ruta
        process.stdout.write(colors.cyan('su ruta no existe'))
      exit();
    }
    //verifica si es ruta .md
    if(inicio.verifyExtension(resp)){
        // leo el archivo y que me devuelva los links
  inicio.fileRead(resp, 'utf8').then((links) =>{
      //console.log(links)
      //retorne los links
      return links
      //entonces
  }).then((links) =>{
     
 // variable que declara la expresion regular de links---- con g ala final es global
const regular = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;
// guardo en una nueva variable el array de links obtenidos
const arrayLink = links.match(regular)
console.log(arrayLink);

//recorro los links uno a uno

arrayLink.forEach((ref) =>{
    
    const data ={
    href: ref,
    file: resp
    }
    //los coloco en un nuevo array
    newArray.push(data)
   })
return newArray
//entonces
 })
.then((newArray) =>{
    // creo un array nuevo
 const arrayPromise = newArray.map((ref) => linksStatus(ref.href))
 return Promise.all(arrayPromise);
}) 
    }
})
} 



    
const linksStatus = (link) => {
return new Promise ((resolve) => {
    
  //recorre el objeto  ..con el metodo
const options={
    method:'GET',
    pathname: url.parse(link).pathname,
    port:443,
    hostname:url.parse(link).host,
    //method:'HEAD'
};
    //console.log(options);

 // metodo https 
const req = https.request(options, (res) => {
    //estado de links
    const newData ={
        nameLink:link,
        Code: res.statusCode,
        status:`ok ${res.statusCode}`
    };
    console.log('ONE REQ', newData);
    console.log('statusCode: ${link.statusCode}');

 resolve(newData);
// });
// link.on('data',d =>{
//     process.stdout.write(d)
    
});
req.on('error',(error) =>{
    console.error(error)
    const errorData={
        nameLink:link,
        status:false,
    };
    resolve(errorData);
    });
req.end()
return link.linksStatus
                        
});

}  





module.exports = {
    readMd, 
    linksStatus,
}

//funcion para leer documento md y links dentro de el


// function readMD(file){
//     //file='README.md';
//      const promise = new Promise((resolve)=>{
//         const arrayLine=[];
//          const lector =readline.createInterface({
//              input:fs.createReadStream(file)
//          });
//          let regular = /(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g;
//          //console.log('hola' + arrayline)
//          lector.on('line', linea =>{
//              if(regular.test(linea)){
//                  //console.log('holiss' + lector)
//                 let arrayLink =linea.match(regular);
//                 console.log('chaito \n' + arrayLink)
//                 arrayLine.push(arrayLink[0]);
//              }
//      }).on('close',() => {
//          resolve(arrayLine)
//      });
//  });
//  return promise
//  }
