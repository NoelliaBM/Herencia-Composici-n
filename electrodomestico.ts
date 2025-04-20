export class Electrodomestico {
    private marca: string;
    private modelo: string;
    private estaEncendido: boolean = false;

    constructor(pMarca: string, pModelo: string, pEstaEncendido: boolean) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }

    public getmarca(): string {
        return this.marca;
    }
    public setmarca(pMarca: string) {
        this.marca = pMarca;
    }
    public getmodelo(): string {
        return this.modelo;
    }
    public setmodelo(pModelo: string) {
        this.modelo = pModelo;
    }
    public getestaEncendido(): boolean {
        return this.estaEncendido;
    }
    public setestaEncendido(pEstaEncendido: boolean) {
        this.estaEncendido = pEstaEncendido;
    }
    encendidoApagado(pEstaEncendido: boolean) {
        if (pEstaEncendido) {
            pEstaEncendido = false;
            console.log("Esta encendido");
        } else {
            pEstaEncendido = true;
            console.log("Esta apagada");

        }
    }

    mostrarInfo() {
        console.log(`
        Marca: ${this.marca}.
        Modelo: ${this.modelo}.
        Esta encendido: ${this.estaEncendido}.  `);

    }
}