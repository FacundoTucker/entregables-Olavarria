import { Rueda } from "./Rueda";

export class Moto {
    // Propiedades
    private marca: string;
    private modelo: string;
    private color : string;
    private ruedas: Rueda[];

    // Constructor
    constructor(marca: string, modelo: string, color : string, ruedas: Rueda[]) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    // Métodos
    public getMarca(): string {
        return `Marca: ${this.marca}`;
    }

    public getModelo(): string {
        return `Modelo: ${this.modelo}`;
    }

    public getColor(): string {
        return `Color: ${this.color}`;
    }

    public getRuedas(): Rueda[] {
        return this.ruedas;
    }

    public setRuedas(ruedas : Rueda[]){
        this.ruedas = ruedas;
    }

    public setColor(color : string){
        this.color = color;
    }
}