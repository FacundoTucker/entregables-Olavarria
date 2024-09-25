import { Rueda } from "./Rueda";

export class Camion {
    // Propiedades
    private marca: string;
    private modelo: string;
    private capacidadCarga : number;
    private ruedas: Rueda[];

    // Constructor
    constructor(marca: string, modelo: string, capacidadCarga : number, ruedas: Rueda[]) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadCarga = capacidadCarga
        this.ruedas = ruedas;
    }

    // Métodos
    public getMarca(): string {
        return `Marca: ${this.marca}`;
    }

    public getModelo(): string {
        return `Modelo: ${this.modelo}`;
    }

    public getCapacidadCarga(): string {
        return `Capacidad de carga: ${this.capacidadCarga}`;
    }

    public getRuedas(): Rueda[] {
        return this.ruedas;
    }

    public setRuedas(ruedas : Rueda[]){
        this.ruedas = ruedas;
    }

    public setCapacidadCarga(capacidadCarga : number){
        this.capacidadCarga = capacidadCarga;
    }
}