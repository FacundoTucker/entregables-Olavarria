import { Rueda } from "./Rueda";

export class Moto {
    //propiedades
    private marca: string;
    private modelo: string;
    private color : string;
    private ruedas: Rueda[];
    private patente : string;

    //constructor
    constructor(marca: string, modelo: string, color : string, ruedas: Rueda[], patente : string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
        this.patente = patente;
    }

    //metodos

    //getters
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getColor(): string {
        return this.color;
    }
    public getRuedas(): number[] {
        return this.ruedas.map(rueda => rueda.getTamañoRueda());
    }
    public getPatente(): string{
        return this.patente;
    }

    //setters
    public setMarca(marca : string): void {
        if(marca != undefined && marca != ""){
            this.marca = marca;
        }
    }
    public setModelo(modelo : string): void{
        if(modelo != undefined && modelo != ""){
            this.modelo = modelo;
        }
    }
    public setColor(color : string): void{
        if(color != undefined && color != ""){
            this.color = color;
        }
    }
    public setRuedas(ruedas : Rueda[]): void{
        if(ruedas != undefined && ruedas.length >= 4){
            this.ruedas = ruedas;
        }
    }
    public setPatente(patente : string): void{
        if(patente != undefined && patente.length >= 6){
            this.patente = patente;
        } 
    }
}