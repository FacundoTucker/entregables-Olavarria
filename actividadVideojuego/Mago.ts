import { Personaje } from "./Personaje";
import { SuperMago } from "./SuperMago";

export class Mago extends Personaje {
    //atributos
    protected mana : number = 50;

    //constructor
    constructor(nombre : string){
        super(nombre)
    }

    //getter y setter
    public getMana(): number{
        return this.mana;
    }
    public setMana(mana : number): void{
        if(mana != undefined && mana >= 0){
            this.mana = mana;
        }
    }

    //metodos
    public atacar(): void {
        console.log(this.nombre + " ha lanzado un hechizo de daño.")
    }

    public defender(): void {
        console.log(this.nombre + " se ha colocado un escudo magico.")
    }

    public ataqueMejorado(): void {
        if(this.nivel >= 2 && this.mana >= 10){
            console.log(this.nombre + " ha lanzado una bola de fuego.");
            this.mana -= 10;
        }else if(this.nivel <= 1){
            console.log(this.nombre + " necesita ser nivel 2 o superior para poder utilizar su ataque mejorado. Nivel actual: " + this.nivel)
        }else {
            console.log("No dispones de mana suficiente para realizar el ataque mejorado.")
        }
    }

    public subirDeNivel(): void {
        if(this.nivel < 9){
            this.nivel++;
            this.puntosDeVida += 5;
            this.mana += 5;
            console.log(this.nombre + " ha subido a nivel " + this.nivel);
        }else{
            console.log(this.nombre + " ha alcanzado el nivel maximo. Evoluciona para seguir progresando.")
        }
    }
}