import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { Rueda } from "./Rueda";
import { RegistroAutomotor } from "./RegistroAutomotor";

const ruedasPrimerAuto: Rueda[] = [new Rueda(16), new Rueda(16), new Rueda(16), new Rueda(16)];
const ruedasSegundoAuto: Rueda[] = [new Rueda(15.5), new Rueda(15.5), new Rueda(15.5), new Rueda(15.5)];
const ruedasPrimerMoto: Rueda[] = [new Rueda(17), new Rueda(17)];
const ruedasPrimerCamion: Rueda[] = [new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20), new Rueda(20)];

let autoSuran : Auto = new Auto("Volswagen", "Suran", ruedasPrimerAuto,"AC390ZZ");
let autoFiesta : Auto = new Auto("Ford", "Fiesta", ruedasSegundoAuto,"B222222");
let motoHornet : Moto = new Moto("Honda", "Hornet", "Azul plateado", ruedasPrimerMoto,"ACT999");
let camionTector : Camion = new Camion("Iveco", "Tector", 5000, ruedasPrimerCamion,"ZZ456CC");

const registroAutomotor : RegistroAutomotor = new RegistroAutomotor("Facundo SA");

registroAutomotor.agregarAuto(autoSuran);
registroAutomotor.agregarAuto(autoFiesta);
registroAutomotor.agregarMoto(motoHornet);
registroAutomotor.agregarCamion(camionTector);

console.log(registroAutomotor.getNombre() + "\n");      //get registro

console.log(registroAutomotor.getListaAutos());
registroAutomotor.eliminarAuto("B222222");              //auto
registroAutomotor.consultarAuto("B222222");

console.log(registroAutomotor.getListaMotos());
registroAutomotor.eliminarMoto("ACT999");               //moto
registroAutomotor.consultarMoto("ACT999");

console.log(registroAutomotor.getListaCamiones());
registroAutomotor.eliminarCamion("ZZ456CC")             //camion
registroAutomotor.consultarCamion("ZZ456CC")

registroAutomotor.modificarAuto("AC390ZZ", "Toyota", "Gol", ruedasPrimerAuto);   //modificar auto
registroAutomotor.consultarAuto("AC390ZZ");

registroAutomotor.modificarMoto("ACT999", "Yamaha", "", "Rojo", ruedasPrimerMoto)       //modificar moto
registroAutomotor.consultarMoto("ACT999");

registroAutomotor.modificarCamion("ZZ456CC", "NuevoIveco", "Carga", 30000, ruedasPrimerCamion)      //modificar camion
registroAutomotor.consultarCamion("ZZ456CC");


