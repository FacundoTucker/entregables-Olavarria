import { Rueda } from "./Rueda";

export class Auto {
    // Propiedades
    private marca: string;
    private modelo: string;
    private ruedas: Rueda[];

    // Constructor
    constructor(marca: string, modelo: string, ruedas: Rueda[]) {
        this.marca = marca;
        this.modelo = modelo;
        this.ruedas = ruedas;
    }

    // Métodos
    public getMarca(): string {
        return `Marca: ${this.marca}`;
    }

    public getModelo(): string {
        return `Modelo: ${this.modelo}`;
    }

    public getRuedas(): Rueda[] {
        return this.ruedas;
    }

    public setRuedas(ruedas : Rueda[]){
        this.ruedas = ruedas;
    }
}


