import { getWheels, setWheel } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

const wheels = getWheels()

export const wheelTypes = () => {
    let html = `<h2>Wheelin' and Dealin'</h2>`

    html += '<select id="wheel">'
    html += '<option value="0">Select a wheel package</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.wheelType}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
