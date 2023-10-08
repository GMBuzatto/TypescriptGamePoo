"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    constructor(nome) {
        this._nome = nome;
        this._money = 0;
        this.vida = 10;
        this.forca = 1;
        this.defesa = 1;
    }
}
exports.Personagem = Personagem;
