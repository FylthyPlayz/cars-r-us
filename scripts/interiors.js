import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)
const interiors = getInteriors()

export const interiorTypes = () => {
    let html = `<h2>Interiors</h2>`

    html += '<select id="interior">'
    html += '<option value="0">Select your interior type </option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.seatType}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
   

   
