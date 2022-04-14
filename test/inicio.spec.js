
const {verifyExistence,verifyExtension }= require('../inicio.js');
const { readMd } = require('../links.js');
const ruta = 'C :/Norma/Laboratoria/Laboratoria 19/SCL019-md-links/README.md'
const file ='./README.md'
const file1 ='./texto1.txt'
const file2= 'https://jestjs.io/docs/es-ES/asynchronous)'


describe('La funcion verifica la existencia', () => {
    //const ruta = 'C:\Norma\Laboratoria\Laboratoria 19\SCL019-md-links\README.md'
    //const file ='.\README.md'

  it('Si el archivo existe y devuelve true ', () => { 
  
   expect(verifyExistence(file)).toBe(true)
  });
  it('Si el archivo no existe y devuelve false' , () => {
   //const file ='.\README.md'
        expect(verifyExistence(file1)).toBe(false)
    });
});

describe('La función verifyExtension', () => {

    it('verifica la extensión del archivo. Si es md. Devuelve true', () => {
      expect(verifyExtension(ruta)).toBe(true);
    });
   
    it('verifica la extensión del archivo. Si no es .md devuelve false', () => {
       expect(verifyExtension(file1)).toBe(false);
    });
  });
  

  describe('La función Leer LINKS en archivos .md', () => {

    it('verifica la extensión del archivo. Si es md. Devuelve true', () => {
      expect(readMd(ruta, file2)).toBe(true);
    });
   
    it('verifica si son links. Sino es devuelve false', () => {
       expect(readMd(ruta, file1)).toBe(false);
    });
  });
  


