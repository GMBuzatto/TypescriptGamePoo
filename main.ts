import prompt from "prompt-sync"


let teclado = prompt()
let menuOption = 0

while (menuOption != 3) {
    console.log("@---TypescriptGamePoo---@")
    console.log("| 1 - Jogar             |")
    console.log("| 2 - Criar Personagem  |")
    console.log("| 3 - Sair              |")
    console.log("@-----------------------@")
    menuOption = + teclado("Escolha uma opção: ")

}