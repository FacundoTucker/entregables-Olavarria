import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
    //propiedades
    private nombreInstitucion: string;
    private listaDeAlumnos: Alumno[];
    private listaDeProfesores: Profesor[];

    //constructor
    constructor(nombre: string) {
        this.nombreInstitucion = nombre;
        this.listaDeAlumnos = [];
        this.listaDeProfesores = [];
    }

    //metodos
    public obtenerNombre(): string {
        return this.nombreInstitucion;
    }

    public matricularAlumno(alumno: Alumno): void {
        this.listaDeAlumnos.push(alumno);
    }

    public contratarProfesor(profesor: Profesor): void {
        this.listaDeProfesores.push(profesor);
    }

    public mostrarAlumnos(): Alumno[] {
        return this.listaDeAlumnos;
    }

    public mostrarProfesores(): Profesor[] {
        return this.listaDeProfesores;
    }

    public despedirProfesor(nombre: string): void {
        for (let i = 0; i < this.listaDeProfesores.length; i++) {
            if (this.listaDeProfesores[i].obtenerNombre() === nombre) {
                this.listaDeProfesores.splice(i, 1);  //de esta forma eliminamos del array
            }
        }
    }
    
    public expulsarAlumno(nombre: string): void {
        for (let i = 0; i < this.listaDeAlumnos.length; i++) {
            if (this.listaDeAlumnos[i].obtenerNombre() === nombre) {
                this.listaDeAlumnos.splice(i, 1);
            }
        }
    }
}
