import { getTechnologies, setTechnology } from "./database.js";

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(clickEvent.target.value))
        }
    }
)

const technologies = getTechnologies()

export const techTypes = () => {
    let html = `<h2>Tech Zone</h2>`

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (technology) => {
        return `<option value="${technology.id}">${technology.package}</option>`
    }
)

html += arrayOfOptions.join("")
html += "</select>"
return html
}
