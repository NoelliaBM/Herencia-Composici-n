

import { Electrodomestico } from "./electrodomestico";
import { Heladera } from "./heladera";
import { SmartHeladera } from "./smartHeladera";
import { ModuloWifi } from "./wifi";
let wifi:ModuloWifi=new ModuloWifi(100,6,true);
let heladera: SmartHeladera = new SmartHeladera("Samsung","inverter 853L",false,5,wifi);
heladera.encendidoApagado(true);
 heladera.cambiarTemperatura(3);
heladera.conectarInternet();
heladera.mostrarInfo();
