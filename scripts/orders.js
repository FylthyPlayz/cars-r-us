import { getOrders } from "./database.js"
import { getInteriors } from "./database.js"
import { getPaintColors } from "./database.js"
import { getTechnologies } from "./database.js"
import { getWheels } from "./database.js"


const buildOrderListItem = (order) => {

    const interiors = getInteriors()
    const paintColors = getPaintColors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    const foundinterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundpaintColor = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintcolorId
        }
    )
    const foundtechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundwheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )

    const totalCost = foundinterior.price + foundpaintColor.price + foundtechnology.price + foundwheel.price


    const costString = totalCost.toLocaleString("en-US", {
        technology: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} was placed on ${order.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}