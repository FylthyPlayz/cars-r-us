const database = {
    carBuilder: {
        id: 1,
        interiorId: 0,
        paintColorId: 0,
        technologyId: 0,
        wheelId: 0,
    },

    paintColors: [
        { id: 1, color: "Silver", price: 199 },
        { id: 2, color: "Midnight Blue", price: 299 },
        { id: 3, color: "Firebrick Red", price: 399 },
        { id: 3, color: "Spring Green", price: 249 }
    ],
    interiors: [
        { id: 1, seatType: "Beige Fabric", price: 599 },
        { id: 2, seatType: "Charcoal Fabric", price: 699 },
        { id: 3, seatType: "White Leather", price: 1500 },
        { id: 4, seatType: "Black Leather", price: 1999 }
    ],
    technologies: [
        { id: 1, package: "Basic Package (basic sound system)", price: 300 },
        { id: 2, package: "Navigation Package (includes integrated navigation controls)", price: 600 },
        { id: 3, package: "Visibility Package (includes side and reat cameras)", price: 2999 },
        { id: 4, package: "Ultra Package (includes navigation and visibility packages)", price: 3499 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 599 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 699 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 1500 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 1999 }
    ]
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const setInterior = (id) => {
    database.carBuilder.interiorId = id
}
export const setPaintColor = (id) => {
    database.carBuilder.paintColorId = id
}
export const setTechnology = (id) => {
    database.carBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.carBuilder.wheelId = id
}

// export const addCustomOrder = () => {
//     // Copy the current state of user choices
//     const newOrder = {...database.carBuilder}

//     // Add a new primary key to the object
//     const lastIndex = database.customOrders.length - 1
//     newOrder.id = database.customOrders[lastIndex].id + 1

//     // Add a timestamp to the order
//     newOrder.timestamp = Date.now()

//     // Add the new order object to custom orders state
//     database.customOrders.push(newOrder)

//     // Reset the temporary state for user choices
//     database.orderBuilder = {}

//     // Broadcast a notification that permanent state has changed
//     document.dispatchEvent(new CustomEvent("stateChanged"))