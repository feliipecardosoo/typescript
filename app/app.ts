import { NegociacaoControler } from "./controllers/negociacao-controlle.js";

const controller = new NegociacaoControler()

const form = document.querySelector('.form')
form.addEventListener('submit', evento => {
    evento.preventDefault()
    controller.adiciona()
})