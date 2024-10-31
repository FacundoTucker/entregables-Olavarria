import { Mago } from "./Mago";

export class SuperMago extends Mago{
    //atributos
    protected nivel : number = 10;
    protected puntosDeVida : number = 250;
    protected mana : number = 150;

    //constructor
    constructor(nombre : string){
        super(nombre)
    }

    //metodos
    public subirDeNivel(): void {
        this.nivel++;
        this.puntosDeVida += 20;
        this.mana += 20;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }

    public superAtaque(): void {
        if(this.mana >= 20){
            console.log(this.nombre + " ha usado su super ataque. Tormenta de Hielo.")
            this.mana -= 20;
        } else {
            console.log("No dispones de mana suficiente para realizar el Super Ataque")
        }
    }
}