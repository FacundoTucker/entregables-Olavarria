import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    //atributos
    private mana : number;

    //constructor
    constructor(nombre : string){
        super(nombre)
        this.mana = 50;
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

    public ataqueEspecial(): void {
        if(this.nivel >= 2 && this.mana >= 10){
            console.log(this.nombre + " ha lanzado una bola de fuego.");
            this.mana -= 10;
        }else {
            console.log(this.nombre + " necesita ser nivel 2 o superior para poder utilizar su ataque especial. Nivel actual: " + this.nivel)
        }
    }

    public subirDeNivel(): void {
        this.nivel++;
        this.puntosDeVida += 10;
        this.mana += 20;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }
}