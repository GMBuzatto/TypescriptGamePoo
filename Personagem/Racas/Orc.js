"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orc = void 0;
const Personagem_1 = require("../Personagem");
class Orc extends Personagem_1.Personagem {
    constructor(nome, nomePet) {
        super(nome);
        this._pet = nomePet;
    }
    setVida() {
        this.vida = 20;
    }
    setForca() {
        this.forca = 5;
    }
    setDefesa() {
        this.defesa = 3;
    }
}
exports.Orc = Orc;
