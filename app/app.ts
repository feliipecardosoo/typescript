import { NegociacaoControler } from "./controllers/negociacao-controlle.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoControler()

const form = document.querySelector('.form')
form.addEventListener('submit', evento => {
    evento.preventDefault()
})