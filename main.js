"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let teclado = (0, prompt_sync_1.default)();
let menuOption = 0;
while (menuOption != 3) {
    console.log("@---TypescriptGamePoo---@");
    console.log("| 1 - Jogar             |");
    console.log("| 2 - Criar Personagem  |");
    console.log("| 3 - Sair              |");
    console.log("@-----------------------@");
    menuOption = +teclado("Escolha uma opção: ");
}
