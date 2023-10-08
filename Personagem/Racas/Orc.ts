import { Personagem } from "../Personagem";

export class Orc extends Personagem {

    private _pet: string

    constructor(nome: string, nomePet: string) {
        super(nome)

        this._pet = nomePet

    }

    protected setVida(): void {
        this.vida = 20
    }

    protected setForca(): void {
        this.forca = 5
    }

    protected setDefesa(): void {
        this.defesa = 3
    }


}