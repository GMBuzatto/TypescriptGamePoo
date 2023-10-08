import prompt from "prompt-sync"
import { Personagem } from "./Personagem/Personagem"
import { Humano } from "./Personagem/Racas/Humano"
import { Orc } from "./Personagem/Racas/Orc"


let teclado = prompt()
let menuOption = 0

while (menuOption != 4) {
    console.log("@---TypescriptGamePoo---@")
    console.log("| 1 - Jogar             |")
    console.log("| 2 - Status            |")
    console.log("| 3 - Criar Personagem  |")
    console.log("| 4 - Sair              |")
    console.log("@-----------------------@")
    menuOption = + teclado("Escolha uma opção: ")

    switch (menuOption) {
        case 3:
            console.clear()
            console.log("@---TypescriptGamePoo---@")
            console.log("| Escolha uma raça:     |")
            console.log("| 1 - Humano            |")
            console.log("| 2 - Orc               |")
            console.log("| 3 - Voltar            |")
            console.log("@-----------------------@")
            let racaOption = + teclado("\n Opção: ")
            if (racaOption == 1) {
                let nome: string = teclado("Escolha seu nome: ")
                let sobreNome: string = teclado("Escolha seu sobre nome: ")
                let personagem: Personagem = new Humano(nome, sobreNome)
            } else {
                let nome: string = teclado("Escolha seu nome: ")
                let pet: string = teclado("Escolha o nome do seu pet: ")
                let personagem: Personagem = new Orc(nome, pet)
            }
            break;
    }
}