

const { Persona } = require('./person.js');
//import { Persona } from "./person.js";


class Student extends Persona {

  constructor(nombre, apellidos, edad, genero, matricula, email, materias) {
    super(nombre, apellidos, edad, genero);
    this.matricula = matricula;
    this.email = email;
    this.materias = materias;
  }

  daysStudying(inicio, fin){
    const date1 = new Date(inicio);
    const date2 = new Date(fin);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }
};


// let materias1 = {materia1: "CIENCIA DE DATOS I", materia2: "DESARROLLO DE SOFTWARE BACKEND I", materia3:"APLICACIONES ELECTRÓNICAS I"};
// var student1 = new Student("Mirna", "Alvarez Felix", "34", "M","02IDSABC2020 ", "mirina@gmail.com",materias1);
// console.log(student1);
// var cantidadDeMaterias = Object.keys(student1.materias).length;
// console.log(`El total de materias del alumn@ ${student1.getNombre()+" "+student1.getApellidos()} son: ${cantidadDeMaterias}`);
// let fechaDeInicio = "09/02/2020";
// let hoy = "09/25/2022";
// console.log(`EL total de días que lleva estudiando son: ${student1.daysStudying(fechaDeInicio, hoy)}`);


module.exports = { Student };





// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// //Responda a la solicitud POST en la ruta raíz (/), la página de inicio de la aplicación:


// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// //Responda a una solicitud PUT en la ruta /user:


// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// //Responda a una solicitud DELETE en la ruta /user:


// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// })