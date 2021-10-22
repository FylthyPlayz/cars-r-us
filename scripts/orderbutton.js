import { placeOrder } from "./database.js"

export const OrderButtonHTML = () => {
  return `
    <button id="orderButton">Place Order</button>
  `
}

document.addEventListener(
  "click",
  (theRealActualClickEvent) => {
    if (theRealActualClickEvent.target.id === "orderButton") {
      placeOrder()
    }
  }
)