// index.js                                                                             LISTO!
// GET -que contenga en el get simular un listado de 5 estudiantes                      LISTO!
//RETURN - listado un objeto de 5 estudiantes res.json                                  LISTO!
//post - simular creacion del usuario                                                   LISTO!
//retornar mensaje de bienvenida                                                        LISTO....
//ejecutando  un par de funciones (function) para calcular dias que lleva estudiando    LISTO! 
// - calcular cantidad de materias del curso (en un array de arrays) de un alumno       LISTO! 


//ENTEGAR PRACTICA EN GITHUB/GITLAB => URL                                              LISTO!
// URL => DE COLECCION EN POSTMAN**** SIN FALLOS!                                       LISTO!
//QUERY URL SearchParams BODY EN EL REQUEST
//PARAMETROS POR RUTA EN EXPRESS                                                        LISTO...
//PRACTICA DE HERENCIA                                                                  LISTO!


var express = require('express');
// var popup = require('popups');


const app = express();
// const popup = popups();
const port = 8000;


const { Student } = require('./student.js');
const { Persona } = require('./person.js');

const persona1 = new Persona('Panchito', 'Flores', '19', 'H');
const persona2 = new Persona("Marco", "Tulio", "23", "H");
const persona3 = new Persona("Pablo", "Lepe Lopez", "41", "H");
const persona4 = new Persona("Monica", "Gomez Lugo", "21", "M");
const persona5 = new Persona("Blanca", "Prieto Martinez", "27", "M");

var materias1 = {materia1: "CIENCIA DE DATOS I", materia2: "DESARROLLO DE SOFTWARE BACKEND I", materia3:"APLICACIONES ELECTRÓNICAS I"};
var materias2 = {materia1: "DESARROLLO DE APPS MOVILES", materia2: "BIG DATA", materia3:"ALGEBRA AVANZADA"};
var materias3 = {materia1: "SOFTWARE FRONTEND", materia2: "BASES DE DATOS", materia3:"ARQUITECTURA DE SOFTWARE"};
var materias4 = {materia1: "MODELADO Y DISEÑO", materia2: "ELECTRONICA BASICA", materia3:"INTERNET DE LAS COSAS"};
var materias5 = {materia1: "NEGOCIOS INTERNACIONALES", materia2: "ADMINSITRACIÓN II", materia3:"MATEMATICAS FINANCIERAS"};


const student1 = new Student("Mirna", "Alvarez Felix", "34", "M","02IDSABC2020 ", "mirna@gmail.com",materias1);
const student2 = new Student("Pedro", "Araujo", "17", "H","02IDSABC2020 ", "pedro@gmail.com",materias2);
const student3 = new Student("Julia", "Ludueña Martinez", "34", "M","02IDSABC2020 ", "julia@gmail.com",materias3);
const student4 = new Student("Hector", "Marentes Zamarripa", "34", "H","02IDSABC2020 ", "hector@gmail.com",materias4);
const student5 = new Student("Astrid", "Martinez Escareño", "40", "M","02IDSABC2020 ", "peque_mtz@gmail.com",materias5);



// console.log(student1);
var cantidadDeMaterias  = Object.keys(student1.materias).length;
var cuantasMaterias = (`El total de materias del alumn@ ${student1.getNombre()+" "+student1.getApellidos()} son: ${cantidadDeMaterias}`);
var fechaDeInicio = "09/02/2020";
var hoy = "09/25/2022";
var diasEstudiando = (`El total de días que lleva estudiando son: ${student1.daysStudying(fechaDeInicio, hoy)}`);
const listado = [];
listado.push({student1,student2,student3,student4,student5});


app.get('/',(req, res) => {
    // popup.alert({
    //     content: 'Hello!'
    // });
    res.format({"text/html":() => {res.send('<h1>BIENVENIDOS ESTUDIANTES</h1>')}    
})
});

app.get('/students',(req, res) => {    
    res.send(listado);
});
app.post('/altas', (req, res) =>{
    const student6 = new Student("Carlitos", "Rugrat", "24", "H","02IDSDEF2020 ", "carlitos@gmail.com",materias4);
    listado.push({student6});
    res.send(listado);    
});

app.get('/cuantas_materias', (req, res) => {
    res.send(cuantasMaterias);
});

app.get('/dias_estudiando', (req, res) => {
    res.send(diasEstudiando);
});

app.listen(port,() =>{
    console.log('Estamos en línea');    
});