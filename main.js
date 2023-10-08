"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Humano_1 = require("./Personagem/Racas/Humano");
const Orc_1 = require("./Personagem/Racas/Orc");
let teclado = (0, prompt_sync_1.default)();
let menuOption = 0;
while (menuOption != 4) {
    console.log("@---TypescriptGamePoo---@");
    console.log("| 1 - Jogar             |");
    console.log("| 2 - Status            |");
    console.log("| 3 - Criar Personagem  |");
    console.log("| 4 - Sair              |");
    console.log("@-----------------------@");
    menuOption = +teclado("Escolha uma opção: ");
    switch (menuOption) {
        case 3:
            console.clear();
            console.log("@---TypescriptGamePoo---@");
            console.log("| Escolha uma raça:     |");
            console.log("| 1 - Humano            |");
            console.log("| 2 - Orc               |");
            console.log("| 3 - Voltar            |");
            console.log("@-----------------------@");
            let racaOption = +teclado("\n Opção: ");
            if (racaOption == 1) {
                let nome = teclado("Escolha seu nome: ");
                let sobreNome = teclado("Escolha seu sobre nome: ");
                let personagem = new Humano_1.Humano(nome, sobreNome);
            }
            else {
                let nome = teclado("Escolha seu nome: ");
                let pet = teclado("Escolha o nome do seu pet: ");
                let personagem = new Orc_1.Orc(nome, pet);
            }
            break;
    }
}
