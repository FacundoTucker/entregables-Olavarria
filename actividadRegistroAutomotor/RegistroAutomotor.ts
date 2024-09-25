import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

export class RegistroAutomotor{
    //propiedades
    private nombre : string;
    private listaAutos : Auto[];
    private listaCamiones : Camion[];
    private listaMotos : Moto[];

    //constructor
    constructor(nombre : string){
        this.nombre = nombre;
        this.listaAutos = [];
        this.listaCamiones = [];
        this.listaMotos = [];
    }

    //metodos
    agregarAuto(auto : Auto) : void {
        this.listaAutos.push(auto);
    }
    agregarMoto(moto : Moto) : void {
        this.listaMotos.push(moto);
    }
    agregarCamion(camion : Camion) : void {
        this.listaCamiones.push(camion);
    }

    getListaAutos(): Auto[] {
        const copiaAutos : Auto[] = this.listaAutos.map(libro => ({...libro}) as Auto); //* forma implementada por mauricio en la clase el lunes
        return copiaAutos;
    }
    getListaMotos(): Moto[] {
        const copiaMotos : Moto[] = this.listaMotos.map(libro => ({...libro}) as Moto); //*
        return copiaMotos;
    }
    getListaCamiones(): Camion[] {
        const copiaCamiones : Camion[] = this.listaCamiones.map(libro => ({...libro}) as Camion); //*
        return copiaCamiones;
    }

    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre : string):void {
        this.nombre = nombre;
    }

    eliminarAuto(autoAEliminar : Auto): void {
        if(autoAEliminar != undefined && this.listaAutos.includes(autoAEliminar)){   //forma implementada por mauri
            const posicionAuto : number = this.listaAutos.indexOf(autoAEliminar);
            this.listaAutos.splice(posicionAuto,1);
        }
    }

    eliminarMoto(motoAEliminar : Moto): void {
        if(motoAEliminar != undefined && this.listaMotos.includes(motoAEliminar)){
            const posicionMoto : number = this.listaMotos.indexOf(motoAEliminar);
            this.listaMotos.splice(posicionMoto,1);
        }
    }

    eliminarCamion(camionAEliminar : Camion): void {
        if(camionAEliminar != undefined && this.listaCamiones.includes(camionAEliminar)){
            const posicionCamion : number = this.listaCamiones.indexOf(camionAEliminar);
            this.listaCamiones.splice(posicionCamion,1);
        }
    }
}

