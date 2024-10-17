import { Personaje } from "./Personaje";

export class Arquero extends Personaje{
    //atributos
    private flechasVenenosas : number;

    //constructor
    constructor(nombre : string){
        super(nombre);
        this.flechasVenenosas = 5;
    }

    //getter y setter
    public getFlechasVenenosas(): number{
        return this.flechasVenenosas;
    }
    public setFlechasVenenosas(flechas : number): void{
        if(flechas != undefined && flechas >= 0){
            this.flechasVenenosas = flechas;
        }
    }

    //metodos
    public atacar(): void {
        console.log(this.nombre + " ha lanzado una flecha rapida.");
    }

    public defender(): void {
        console.log(this.nombre + " se ha cubierto con su arco.");
    }

    public ataqueEspecial(): void {
        if(this.nivel >= 2){
            console.log(this.nombre + " ha lanzado una flecha venenosa.");
            this.flechasVenenosas --;
        }else{
            console.log(this.nombre + " necesita ser nivel 2 o superior para realizar su ataque especial. Nivel actual: " + this.nivel);
        }
    }

    public subirDeNivel(): void {
        this.nivel ++;
        this.puntosDeVida += 10;
        this.flechasVenenosas += 2;
        console.log(this.nombre + " ha subido a nivel " + this.nivel);
    }
}