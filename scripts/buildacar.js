import { interiorTypes } from "./interiors.js"
import { pickYoPaint } from "./paints.js"
import { techTypes } from "./technologies.js"
import { wheelTypes } from "./wheels.js"
import { OrderButtonHTML } from "./orderbutton.js"
import { Orders } from "./orders.js"
import { placeOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            placeOrder()
        }
    }
)
export const buildACar = () => {
    return `
        <h1>Cars-R-Us</h1>
        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint Color</h2>
                ${pickYoPaint()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${interiorTypes()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${techTypes()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${wheelTypes()}
            </section>
            <button id="orderButton">Create Custom Order</button>
           
            <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
            </article>`

}