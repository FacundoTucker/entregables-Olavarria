import { Rueda } from "./Rueda";
import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotor";

const ruedasPrimerAuto : Rueda[] = [
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
    new Rueda(16),
]
const primerAuto : Auto = new Auto("Volswagen", "Suran", ruedasPrimerAuto);

const ruedasSegundoAuto : Rueda[] = [
    new Rueda(15.5),
    new Rueda(15.5),
    new Rueda(15.5),
    new Rueda(15.5),
]
const segundoAuto : Auto = new Auto("Ford", "Fiesta", ruedasSegundoAuto);


const ruedasPrimerMoto : Rueda[] = [
    new Rueda(17),
    new Rueda(17),
]
const primerMoto : Moto = new Moto("Honda", "Hornet", "Azul plateado", ruedasPrimerMoto);


const ruedasPrimerCamion : Rueda[] = [
    new Rueda(20),
    new Rueda(20),
    new Rueda(20),
    new Rueda(20),
    new Rueda(20),
    new Rueda(20),
]
const primerCamion : Camion = new Camion ("Iveco", "Tector", 5000, ruedasPrimerCamion);


const registroAutomotor : RegistroAutomotor = new RegistroAutomotor("Facundo SA");

registroAutomotor.agregarCamion(primerCamion);
registroAutomotor.agregarAuto(primerAuto);
registroAutomotor.agregarAuto(segundoAuto);
registroAutomotor.agregarMoto(primerMoto);

console.log(registroAutomotor.getNombre() + "\n");

console.log(registroAutomotor.getListaCamiones());
console.log(registroAutomotor.getListaAutos());
console.log(registroAutomotor.getListaMotos());


registroAutomotor.eliminarAuto(primerAuto);
console.log(registroAutomotor.getListaAutos());


