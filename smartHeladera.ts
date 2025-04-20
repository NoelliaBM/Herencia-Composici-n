import { Heladera } from "./heladera";
import { ModuloWifi } from "./wifi";
export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;
    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean, pTemperatura: number, pModuloWifi: ModuloWifi) {
        super(pMarca, pModelo, pEstaEncendido, pTemperatura);
        this.moduloWifi = pModuloWifi;
    }
    conectarInternet(){
    if (this.moduloWifi.getEstaConectado()){
        console.log("Esta conectado a internet");
        }else {
            console.log("No esta conectado a internet.");
            
        }
}
    velocidadDeConeccion(){
        console.log(`la Velocidad de coneccion es de ${this.moduloWifi.getvelocidadMbps}`);
        
    }
}