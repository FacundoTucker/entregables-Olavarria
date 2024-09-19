import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Escuela } from "./Escuela";

const alumno1: Alumno = new Alumno("Juancito", 8);
const alumno2: Alumno = new Alumno("Marcos", 10);
const alumno3: Alumno = new Alumno("Maria", 4);
const alumno4: Alumno = new Alumno("Sofia", 9);

const profesor1: Profesor = new Profesor("Edgardo");
const profesor2: Profesor = new Profesor("Roberto");

const escuela: Escuela = new Escuela("Escuela San Antonio");

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);

escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);

//preguntar si hay alguna forma de hacerlo con un bucle o algo asi
profesor1.añadirAlumno(alumno1);
profesor1.añadirAlumno(alumno2);
profesor2.añadirAlumno(alumno3);
profesor2.añadirAlumno(alumno4);


//prueba
console.log(escuela.obtenerNombre());

console.log("\nLista de profesores con sus respectivos alumnos:");

escuela.mostrarProfesores().forEach(profesor =>{
    console.log("\nProfesor: "+ profesor.obtenerNombre());
    profesor.mostrarAlumnos().forEach(alumno =>{
        console.log("Alumno: " + alumno.obtenerNombre()+ " --- Nota: " + alumno.obtenerNota() + " " + alumno.estaAprobadoDesaprobado());
    });
});
