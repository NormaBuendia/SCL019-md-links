
const {verifyExistence,verifyExtension }= require('../inicio.js');
const ruta = 'C :\Norma\Laboratoria\Laboratoria 19\SCL019-md-links\README.md'
const file ='.\README.md'
const file1 ='.\texto.txt'
describe('verifica la existencia', () => {
    //const ruta = 'C:\Norma\Laboratoria\Laboratoria 19\SCL019-md-links\README.md'
    //const file ='.\README.md'

  it('el archivo.\README.md existe', () => { 
  
   expect(verifyExistence(file)).toBe(true)
  });
  it('el archivo .\README.txt NO existe' , () => {
   //const file ='.\README.md'
        expect(verifyExistence(ruta)).toBe(false)
    });
});

describe('La función verifyExtension', () => {

    it('verifica la extensión del archivo. Si es md. Devuelve true', () => {
      expect(verifyExtension(file)).toBe(true);
    });
   
    it('verifica la extensión del archivo. Si no es .md devuelve false', () => {
       expect(verifyExtension(file1)).toBe(false);
    });
  });
  



