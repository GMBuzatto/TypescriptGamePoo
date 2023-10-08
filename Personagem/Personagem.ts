export abstract class Personagem {

    private _nome: string
    private _money: number

    protected vida: number
    protected forca: number
    protected defesa: number

    constructor(nome: string) {
        this._nome = nome
        this._money = 0

        this.vida = 10
        this.forca = 1
        this.defesa = 1
    }

    protected abstract setVida(): void
    protected abstract setForca(): void
    protected abstract setDefesa(): void
}