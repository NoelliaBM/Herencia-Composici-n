import { Electrodomestico } from "./electrodomestico";
export class Heladera extends Electrodomestico{
    private temperatura: number;
   

    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean, pTemperatura:number){
        super(pMarca,pModelo,pEstaEncendido);
        this.temperatura = pTemperatura;
    }
   
    public gettemperatura(): number {
        return this.temperatura;
    }
    public settemperatura(pTemperatura: number) {
        this.temperatura = pTemperatura;
    }

    cambiarTemperatura(nuevaTemp:number){
        this.temperatura = nuevaTemp
        console.log(`La temperatura se ha cambiado ha ${nuevaTemp}`);
        
    }
}