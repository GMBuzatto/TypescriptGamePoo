import { Personagem } from "../Personagem";

export class Humano extends Personagem {

    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        super(`${nome} ${sobrenome}`)
        this._sobrenome = sobrenome
    }

    protected setVida(): void {
        this.vida = 10
    }

    protected setForca(): void {
        this.forca = 3
    }

    protected setDefesa(): void {
        this.defesa = 3
    }

}