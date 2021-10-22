import { getPaintColors, setPaintColor } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaintColor(parseInt(event.target.value))
        }
    }
)

const paintColors = getPaintColors()

export const pickYoPaint = () => {
    let html = `<h2>Paint Picker</h2>`

    html += '<select id="paint">'
    html += '<option value="0">Pick Yo Paint! </option>'

    const arrayOfOptions = paintColors.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}