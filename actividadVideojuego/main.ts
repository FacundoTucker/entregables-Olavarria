import { Arquero } from "./Arquero";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago"
import { SuperArquero } from "./SuperArquero";
import { SuperLuchador } from "./SuperLuchador";
import { SuperMago } from "./SuperMago";

let maguito = new Mago("Maguito");

maguito.atacar();
maguito.defender();
maguito.ataqueMejorado();
maguito.subirDeNivel();
maguito.ataqueMejorado();

let luchador = new Luchador("Luchadorcito");

luchador.atacar();
luchador.defender();
luchador.ataqueMejorado();
luchador.subirDeNivel();
luchador.ataqueMejorado();

let arquero = new Arquero("Arquerito");

arquero.atacar();
arquero.defender();
arquero.ataqueMejorado();
arquero.subirDeNivel();
arquero.ataqueMejorado();

maguito = new SuperMago(maguito.getNombre());//evolucion manteniendo el nombre
((maguito) as SuperMago).superAtaque();//uso de casting

luchador = new SuperLuchador(luchador.getNombre());
((luchador) as SuperLuchador). superAtaque();

arquero = new SuperArquero(arquero.getNombre());
((arquero) as SuperArquero).superAtaque();

