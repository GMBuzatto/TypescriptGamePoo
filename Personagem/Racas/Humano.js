"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Humano = void 0;
const Personagem_1 = require("../Personagem");
class Humano extends Personagem_1.Personagem {
    constructor(nome, sobrenome) {
        super(`${nome} ${sobrenome}`);
        this._sobrenome = sobrenome;
    }
    setVida() {
        this.vida = 20;
    }
    setForca() {
        this.forca = 3;
    }
    setDefesa() {
        this.defesa = 5;
    }
}
exports.Humano = Humano;
