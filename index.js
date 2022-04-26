
const colors =require('colors')

const inicio = require('./inicio.js');
const { exit } = require('process');
const {stats,
    validate, linksStatus} = require('./validate_stats')


//creo una funcion con promesa
const readMdlinks =(route,opt) =>{
    //nueva promesa que tiene parametros , resolver o rechazar
    return new Promise((resolve, reject) =>{
        //array vacio para guardar links
        let newArray =[];
//si la ruta existe
    if (inicio.verifyExistence(route)&& inicio.verifyExtension(route)) {
      
     }
    else if(!inicio.verifyExtension(route) ){
        process.stdout.write(colors.cyan(' no es archivo .md \n'))
       //si no existe  la ruta
              exit();
    }
    //verifica si es ruta .md
    if(inicio.verifyExtension(route)){
        // leo el archivo pendiente en espera que me devuelva los links
  inicio.readMd(route).then((arrayLink) =>{
  //console.log(arrayLink)
      
   arrayLink.forEach((ref) =>{
    //creo un nuevo objeto  le doy las propiedades
    const data ={
    href: ref,
    file: route,
    
    }
 
    //lo coloco en el array que declare vacio
    newArray.push(data)
   
   })
   //retorno el nuevo array
return newArray


 })
 //pendiente en espera
.then((newArray) =>{
  
    // creo un array nuevo y se agrega la funcion  
 const arrayPromise = newArray.map((ref) => linksStatus(ref.href))
  //retorno todas las promesas
 return Promise.all(arrayPromise);
 
}) 
//pendiente en espera
.then((result) =>{

   if(opt.validate && opt.stats){
      // options(result);
      validate(result);
      stats(result);
      //ademas
   }else{
     if(opt.validate) {
       validate(result);  
       //console.log(route)
    }
      if(opt.stats) {
       stats(result);
       
       }
   }
   resolve(result)
    //resolve(option);
})
 //rechazado
.catch((error) =>{
    console.log(error);
    if(error.code ==='ENOENT'){
        console.log('path no encontrada');
    }else{
        console.log(error.message)
    }
})
}
else {
    console.log('no ingreso ruta')
}
});
};




module.exports = {
    readMdlinks 
    
}










// module.exports = () => {
//   // ...
// };
// modulo para ver la ruta
// const path = require('path')
// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__filename));
// let fs = require('fs');
