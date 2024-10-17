import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    //atributos
    private energia : number;

    //constructor
    constructor(nombre : string){
        super(nombre);
        this.energia = 50;
    }

    //getter y setter
    public getEnergia(): number{
        return this.energia;
    }
    public setEnergia(energia : number): void{
        if(energia != undefined && energia >= 0){
            this.energia = energia;
        }
    }

    //metodos
    public atacar(): void {
        console.log(this.nombre + " ha lanzado un golpe.");
    }

    public defender(): void {
        console.log(this.nombre + " se ha cubierto con su escudo.")
    }

    public ataqueEspecial(): void {
        if(this.nivel >= 2 && this.energia >= 10){
            console.log(this.nombre + " ha realizado un golpe potente.");
            this.energia -= 10;
        }else{
            console.log(this.nombre + " necesita ser nivel 2 o superior para realizar su ataque especial. Nivel actual: " + this.nivel);
        }
    }

    public subirDeNivel(): void {
        this.nivel++;
        this.puntosDeVida += 15;
        this.energia += 10;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }
}