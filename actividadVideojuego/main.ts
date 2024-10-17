import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago"

let maguito = new Mago("Maguito");

maguito.atacar();
maguito.defender();
maguito.ataqueEspecial();
maguito.subirDeNivel();
maguito.ataqueEspecial();

let luchador = new Luchador("Luchadorcito");

luchador.atacar();
luchador.defender();
luchador.ataqueEspecial();
luchador.subirDeNivel();
luchador.ataqueEspecial();

let arquero = new Arquero("Arquerito");

arquero.atacar();
arquero.defender();
arquero.ataqueEspecial();
arquero.subirDeNivel();
arquero.ataqueEspecial();