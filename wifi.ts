export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGHz: number;
    protected estaConectado:boolean = true;

    constructor(pVelocidad:number,pFrecuencia:number,pEstaConectado:boolean){
        this.velocidadMbps = pVelocidad;
        this.frecuenciaGHz = pFrecuencia;
        this.estaConectado = pEstaConectado;
    }

    public getvelocidadMbps(): number {
        return this.velocidadMbps;
    }
    public setvelocidadMbps(pVelocidad: number) {
        this.velocidadMbps = pVelocidad;
    }

    public getfrecuenciaGHz(): number {
        return this.frecuenciaGHz;
    }
    public setfrecuenciaGHz(pFrecuencia: number) {
        this.frecuenciaGHz = pFrecuencia;
    }

    public getEstaConectado(): boolean {
        return this.estaConectado;
    }
    public setEstaConectado(pEstaConectado: boolean) {
        this.estaConectado = pEstaConectado;
    }
}