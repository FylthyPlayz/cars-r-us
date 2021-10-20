import { buildACar } from "./buildacar.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = buildACar()
}

renderAllHTML()